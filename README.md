# Stencil 📐

Turn openapi specifications into react building blocks.

# API

### Table of Contents

-   [buildStencil](#buildStencil)
-   [stencil](#stencil)
    -   [useForm](#useForm)
    -   [queries](#queries)
    -   [mutations](#mutations)
-   [Inspector](#inspector)

## buildStencil

Create a new stencil `buildStencil(openapiDoc, options)`

### Parameters

-   `openapiDoc` **Object**: The OpenAPI document that defines the api.
-   `options` **Object**: An object containing various configuration options.
    -   `server` **Object**: Configuration related to the server.
        -   `url` **String**: The URL of the server.
    -   `devMode` **Boolean**: When devMode is on, some additional information may be shown when an error occurs. For example if you try to access a field that does not exist it will render a warning component that shows the error. When devMode is false this will be hidden.
    -   `useToken` **Function**: A function that returns the auth token.
    -   `components` **Object**: Some generic components that may be reused in different places.
        -   `loading` **Array**: An array of loading components.
            -   `name` **String**: The name of the loading component.
            -   `component` **Function**: A function that returns a React component for loading.
    -   `useForm` **Object**: Configuration for form fields, buttons, errors, and forms.
        -   `errorHandler` **Function**: A function to handle form errors.
        -   `fields` **Array of [ComponentDefinition](#ComponentDefinition)**: An array of field component definitions.
        -   `buttons` **Array of [ComponentDefinition](#ComponentDefinition)**: An array of component definitions.
        -   `formErrors` **Array of [ComponentDefinition](#ComponentDefinition)**: An array of component definitions.
        -   `forms` **Array of [ComponentDefinition](#ComponentDefinition)**: An array of component definitions.
    -   `useList` **Object**: Configuration for lists
        -   `defaultPageSize` **Positive Integer**: How many results to show per page by default.
        -   `emptyStates` **[ComponentDefinition]**: Components to use for list empty states.
        -   `loaders` **[ComponentDefinition]**: Components to use for loading states.
        -   `loadingErrors` **[ComponentDefinition]**: Components to use for when loading fails.
        -   `paginations` **[ComponentDefinition]**: Components to use for pagination. The component will be provided with the following props:
            -   `useQuery`
            -   `setQueryParam`
            -   `useQueryCount`
            -   `useQueryParam`
            -   `calculateNewQuery`

## ComponentDefinition

Defines a component that can be used for some given task. For example a component in useForm.fields is expected to be a form field that will update form data in some way. Stencil is designed to allow for many different versions of components for the same task. For example, you might want to have form fields for different themes. Or you might have many different form fields that can handle text, (eg. a text area, a text input, and a growing text area). You can easily make one of these be the default, while still having the others available in building your form.

### Keys

-   `name` **String**: The name of the component.
-   `predicate` **Function**: A function to determine if the component can be used. This is only applicable to some types of component definitions, namely fields. You will be given the name and details about the field, and can return whether this component can handle the type of field. For example, if the type is boolean, you would return false for a text input component.
-   `theme` **String**: The theme name of the field.
-   `priority` **Number**: The priority of the field. The higher the number, the higher priority it is given. When resolving which field to use as the default, the one with the matching theme and highest priority will be chosen. (This filed will be included in the `Fields` object, and will be used if you let the form render fields itself instead of passing in children. eg. `<Form />`
-   `component` **Function**: A function that returns a React component for the field. eg. `() => props => <input {...props}/>`. For field components, you will normally want to use `useFormContext` from react hook form to hook the component up to the form state.

## stencil

Stencil is the object that is returned by `buildStencil`. It has a number of useful utilities.

### Keys

-   `queries` **Object where all keys are [generatedQueryHooks](#generatedQueryHook)**: All of the generated react-query hooks for the `get` resources. Eg. for a `public/posts` endpoint there will be a `stencil.queries.usePublicPosts` hook.

## generatedQueryHook

TODO: add documentation about stencil.queries

## useForm

### Parameters

-   `name` **String**: The name of the url (you can see all available names in `stencil.urls`)
-   `method` **String**: The http method of the form (eg. `post`, `patch`, `delete`)
-   `options` **[useFormOptions](#useFormOptions)**: 

#### useFormOptions

-   `theme` **String**: Which theme to use, defaults to `default`
-   `useFormOptions` **reactHookFormUseFormOptions**: The object that will get passed to react-hook-form's `useForm`, this is where you can pass along a resolver for validation, or manually pass defaultValues.

## useList

### Parameters

-   `name` **String**: The name of the url (you can see all available names in `stencil.urls`)
-   `options` **[useListOptions](#useListOptions)**: 

#### useListOptions

-   `additionalFilters` **[Filter](#OpenAPIQueryParam)**: Add filters that are not included in the open api document.
-   `id` **String**: This is used to namespace query param args. Eg. if id is `foo` then a query param would look like `?foo.bar=1&foo.baz=2`
-   `useQuery` **Hook** 
-   `loader` **String**: The name of the loader to use.
-   `emptyState` **String**: The name of the emptyState to use.
-   `defaultQueries` **Object**: The default queries to use.

#### OpenAPIQueryParam

This is an object that looks the same as an openapi query param, for example:

```
{ name: 'is_notable', value: 'true', schema: { type: 'string' } }
```

