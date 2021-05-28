const setTokenEvent = 'SET_TOKEN'
const clearTokenEvent = 'CLEAR_TOKEN'
const isTokenSetEvent = 'IS_TOKEN_SET'

const setAuthToken = (token: string) => {
	navigator.serviceWorker.controller.postMessage({
		type: setTokenEvent,
		token: token
	})
}

const clearAuthToken = () => {
	navigator.serviceWorker.controller.postMessage({
		type: clearTokenEvent
	})
}

export {
	setTokenEvent,
	clearTokenEvent,
	isTokenSetEvent,
	setAuthToken,
	clearAuthToken
}
