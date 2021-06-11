import React from "react"
import { clearAuthToken } from "../../auth/authHelper"
import {isAuthenticated} from "../../auth/types"

const LogoutButton: React.FunctionComponent = () => {
  const isLoggedIn = !!window.localStorage.getItem(isAuthenticated)

  const logout = () => {
    clearAuthToken()
    window.location.assign('/login')
  }

  return isLoggedIn && <a href="#" onClick={logout}>Logout</a>
}

export default LogoutButton
