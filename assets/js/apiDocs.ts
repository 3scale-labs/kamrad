import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { APIDocs } from './components/api-docs/APIDocs'

const containerId = 'apiDocs'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById(containerId)
  console.log("container.dataset.url", container.dataset.url)
  ReactDOM.render(
    React.createElement(APIDocs, { url: container.dataset.url }),
    container
  )
})
