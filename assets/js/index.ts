import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Greeter } from './greeter/Greeter'
import * as params from '@params'

ReactDOM.render(
	React.createElement(Greeter, {userName: params.name}),
	document.getElementById('greeter')
)
