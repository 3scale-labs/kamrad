import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LogoutButton } from "./components/login/Logout"

const containerId = 'logoutButton'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById(containerId)
  ReactDOM.render(
    React.createElement(LogoutButton),
    container
  )
})
