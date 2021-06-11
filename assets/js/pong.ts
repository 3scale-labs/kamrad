import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Pong } from './components/pong/Pong'

const containerId = 'pong'

document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById(containerId)
	ReactDOM.render(
		React.createElement(Pong, {id: container.dataset.id}),
		container
	)
})
