import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Greeter } from './components/greeter/Greeter'

const containerId = 'greeter'

document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById(containerId)
	ReactDOM.render(
		React.createElement(Greeter, {id: container.dataset.id}),
		container
	)
})
