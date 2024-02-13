import * as Case from 'case'
import { useMemo } from 'react'
import { FormProvider, useForm as useFormBase } from 'react-hook-form'
import { getDefaultComponent } from '../../utils/get-default-component'
import { buildComponents } from '../../utils/build-components'
import { getPriority } from '../../utils/get-priority'

export const buildUseForm = stencil => ({
  // TODO: validate clobbered args (eg. mutation + mutaitonArgs makes no sense)
  useForm: ({
    path,
    method,
    args,
    queries,
    additionalFields,
    reactHookFormArgs = {},
    mutation,
    mutationArgs = {},
    onSubmit: onSubmitProp,
    theme = '',
    anyTheme = true,
    buttonProps = {children: 'Submit'},
    ...rest
  }) => {
    const {properties, defaultValues, useMutationDefault, Fields, DefaultFields, Button, Buttons, LoadingIndicator, LoadingIndicators, FormError, FormErrors} = useMemo(() => {
      const properties = getProperties(stencil, {config: {path, method, additionalFields}})
      const defaultValues = buildDefaultValues(stencil, {config: {path, method, args, queries}})
      const useMutationDefault = buildUseMutation(stencil, {config: {path, method}})
      const Fields = buildFields({stencil, properties})
      const DefaultFields = buildDefaultFields({Fields, theme, anyTheme})
      // const {Button, Buttons} = buildButtons(stencil, {config: {theme: anyTheme}})
      const [Button, Buttons] = buildComponentVariations({stencil, definitions: stencil.config.useForm?.buttons, theme, anyTheme})
      const [LoadingIndicator, LoadingIndicators] = buildComponentVariations({stencil, definitions: stencil.config.useForm?.loadingIndicators, theme, anyTheme})
      const [FormError, FormErrors] = buildComponentVariations({stencil, definitions: stencil.config.useForm?.formErrors, theme, anyTheme})
      const [BaseForm = (props) => <form {...props} />, BaseForms] = buildComponentVariations({stencil, definitions: stencil.config.useForm?.forms, theme, anyTheme})
      return {
        properties,
        defaultValues,
        useMutationDefault,
        Fields,
        DefaultFields,
        Button,
        Buttons,
        LoadingIndicator,
        LoadingIndicators,
        FormError,
        FormErrors,
        BaseForm,
        BaseForms,
      }
    }, [])

    const defaultMutation = useMutationDefault({args, queries, ...mutationArgs})

    mutation = mutation || defaultMutation

    const methods = useFormBase({
      defaultValues,
      ...reactHookFormArgs
    })

    const onSubmit = ev => {
      if (onSubmitProp) return onSubmitProp(ev, {methods})
      return stencil.config.useForm.onSubmit(ev, {stencil, methods, mutation, path, method, args, queries, ...rest})
    }

    const Form = useMemo(() => {
      // TODO: add FormError and FormComponent
      return ({children, ...props}) => <FormComponent methods={methods} onSubmit={onSubmit} LoadingIndicator={LoadingIndicator} BaseForm={BaseForm} {...props} >
        {!children && <>
          {Object.values(DefaultFields).map((Component, index) => <Component key={index} />)}
          <Button {...buttonProps} />
        </>}
        {children}
      </FormComponent>
    }, [])

    return {
      mutation,
      methods,
      formProps: {
        methods,
        onSubmit
      },
      Form,
      Fields,
      DefaultFields,
      Button,
      Buttons,
      LoadingIndicator,
      LoadingIndicators,
      FormError,
      FormErrors,
    }
  }
})

const getProperties = (stencil, {config: {path, method, additionalFields}}) => ({
  ...stencil.openapi.paths[path]?.[method]?.requestBody.content['application/json'].schema.properties || {},
  ...additionalFields
})

const buildDefaultValues = (stencil, {config: {path, method, args, queries}}) =>
  async () => {
    if (!path.includes('{')) return {}
    const token = await stencil.config.getToken()
    const result = await stencil.fetch({path, args, queries, token})
    return result
  }

const buildUseMutation = (stencil, {config: {path, method}}) =>
  (args) => stencil.useMutation({path, method, ...args})

const buildFields = ({stencil, properties, prefixes = []}) => {
  // TODO: validate that there are no two fields with the same theme and priority for a given field.
  if (!properties) {
    const name = Case.pascal(prefixes.join('-'))
    return {
      [name]: {
        [`Default${name}`]: () => (
          <div>TODO: Arbitrary Json {prefixes.join(' ')}</div>
        ),
      },
    }
  }
  return Object.entries(properties).reduce(
    (acc, [name, details]) => {
      return {
        ...acc,
        ...details.type === 'object'
          ? buildFields({
            properties: details.properties,
            prefixes: [...prefixes, name],
            stencil
          })
          : {
            [Case.pascal([...prefixes, name].join('-'))]: buildFieldComponent({
              name: [...prefixes, name].join('.'),
              details,
              stencil
            })
          } 
      }
    },
    {}
  )
}

const buildFieldComponent = ({name, details, stencil}) => {
  return stencil.config?.useForm?.fields?.reduce((acc, field) => {
    if (field.predicate({name, details})) {
      const component = field.component({name, details})
      const theme = Case.pascal(field.theme || '')
      component.priority = getPriority({priority: field.priority, args: {name, details}})
      acc[`${theme}${field.name}`] = component
    }
    return acc
  }, {})
}

const buildDefaultFields = ({Fields, theme, anyTheme}) =>
  Object.entries(Fields).reduce((acc, [name, components]) => ({
    ...acc,
    [name]: getDefaultComponent({components, theme, anyTheme})
  }), {})

const buildButtons = (stencil, {config: {theme, anyTheme}}) => {
  const Buttons = buildComponents({
    stencil,
    components: stencil.config.useForm?.buttons || []
  })
  const Button = getDefaultComponent({components: Buttons, theme, anyTheme})
  return {
    Buttons,
    Button
  }
}

const buildComponentVariations = ({stencil, definitions = [], theme, anyTheme}) => {
  const AllComponents = buildComponents({
    stencil,
    components: definitions
  })
  const DefaultComponent = getDefaultComponent({components: AllComponents, theme, anyTheme})
  return [
    DefaultComponent,
    AllComponents
  ]
}

const FormComponent = ({methods, BaseForm, LoadingIndicator, children, ...props}) => {
  return <FormProvider {...methods} >
    <BaseForm {...props}>
      {methods.formState.isLoading && <LoadingIndicator />}
      {!methods.formState.isLoading && children}
    </BaseForm>
  </FormProvider>
}

