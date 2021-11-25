import React, {ChangeEvent, SyntheticEvent, useState} from 'react'
import { setAuthToken } from "../../auth/authHelper"

interface ILoginForm {
  token: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void
}

const LoginForm: React.FunctionComponent<ILoginForm> = (
  {
    token,
    onChange,
    onClick
  }
) => {
  return (
    <form>
      <input
        type="password"
        onChange={onChange}
        value={token}
      />
      <button onClick={onClick}>Submit</button>
    </form>
  )
}

const Login: React.FunctionComponent = () => {
  const [token, setToken] = useState('')

  const postLogin = (event: SyntheticEvent) => {
    event.preventDefault()
    // TODO: Create service to validate the token before saving it.
    setAuthToken(token)
    // TODO: Get from $.Site.BaseURL
    window.location.assign('/kamrad')
  }

  return (
    <LoginForm
      token={token}
      onChange={(event) => setToken(event.currentTarget.value)}
      onClick={postLogin}
    />
  )
}

export { Login }
