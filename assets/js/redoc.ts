import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Redoc } from './components/redoc/Redoc'

const containerId = 'redoc-react'

document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById(containerId)
	ReactDOM.render(
		React.createElement(Redoc, {url: container.dataset.url}),
		container
	)
})
