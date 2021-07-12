import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Login } from './components/login/Login'

const containerId = 'loginForm'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById(containerId)
  container && ReactDOM.render(
    React.createElement(Login),
    container
  )
})
