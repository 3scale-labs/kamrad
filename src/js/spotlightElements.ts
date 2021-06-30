import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Elements } from './components/spotlight/Elements'

const containerId = 'spotlight-elements-react'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById(containerId)

  ReactDOM.render(
    React.createElement(Elements, { url: container.dataset.url }),
    container
  )
})
