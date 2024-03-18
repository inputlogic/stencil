import {useState} from 'react'

const AddAccount = ({
  stencil,
  accounts,
  setAccounts,
}) => {
  const [addAccountOpen, setAddAccountOpen] = useState(false)
  const loginMutation = stencil.mutations.usePublicUserLoginMutation()
  const LoginForm = stencil.useForm('publicUserLogin', 'post')
  const Fields = LoginForm.Fields
  const onSubmit = async ({ email, username, password }) => {
    const response = await loginMutation.mutateAsync({ email, username, password })
    const updatedAccounts = [...accounts, { email: email || username, token: response.token }]
    setAccounts(updatedAccounts)
    setAddAccountOpen(false)
  }
  return (
    <LoginForm.Form onSubmit={onSubmit} />
  )
}

export const Accounts = ({stencil, accounts, setAccounts}) => {
  const onClickRemove = (account) => {
    const updatedAccounts = accounts.filter((a) => a.email != account.email)
    setAccounts(updatedAccounts)
  }
  const onClickSetActive = (account) => {
    const updatedAccounts = accounts.map(({ email, ...rest }) => ({
      ...rest,
      email,
      isActive: account.email === email,
    }))
    setAccounts(updatedAccounts)
  }
  return (
    <div>
			<h4>Accounts</h4>
      <div>
        <div>
          <span>
            Not authenticated{' '}
            {!accounts.find((a) => a.isActive) ? ' (active)' : ''}
          </span>
          {!!accounts.find(a => a.isActive) &&
            <button onClick={() => onClickSetActive({ email: '-' })}>
              set active
            </button>
          }
        </div>
        {accounts?.length > 0 &&
          accounts.map((account) => (
            <div key={account.email}>
              <span>
                {account.email} {account.isActive && ' (active)'}
              </span>
              <button onClick={() => onClickRemove(account)}>remove</button>
              {!account.isActive &&
              <button onClick={() => onClickSetActive(account)}>
                set active
              </button>
              }
            </div>
          ))}
      </div>
      <AddAccount
        stencil={stencil}
        setAccounts={setAccounts}
        accounts={accounts}
      />
      {/* {openapi && ( */}
      {/*   <AddAccount */}
      {/*     openapi={openapi} */}
      {/*     setAccounts={setAccounts} */}
      {/*     accounts={accounts} */}
      {/*     loginFormName={loginFormName} */}
      {/*     loginFormMethod={loginFormMethod} */}
      {/*   /> */}
      {/* )} */}
    </div>
  )
}
