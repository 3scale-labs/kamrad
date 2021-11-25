import React from "react"
import { clearAuthToken } from "../../auth/authHelper"
import { isAuthenticated } from "../../auth/types"

const LogoutButton: React.FunctionComponent = () => {
  const isLoggedIn = !!window.localStorage.getItem(isAuthenticated)

  const logout = () => {
    clearAuthToken()
    // TODO: Get from $.Site.BaseURL
    window.location.assign('/kamrad/login')
  }

  return isLoggedIn && <a href="#" onClick={logout}>Logout</a>
}

export { LogoutButton }
