const authBroadCastChannelName = 'broadcastAuthChannel'
const checkTokenEvent = 'CHECK_TOKEN'
const setTokenEvent = 'SET_TOKEN'
const tokenSetEvent = 'TOKEN_SET'
const clearTokenEvent = 'CLEAR_TOKEN'
const tokenClearedEvent = 'TOKEN_CLEARED'

type AuthEventData<T> = {
	type: string,
	payload?: T
}

const setAuthToken = (token: string) => (
	navigator.serviceWorker.controller.postMessage({
		type: setTokenEvent,
		token: token
	})
)

const clearAuthToken = () => (
	navigator.serviceWorker.controller.postMessage({type: clearTokenEvent})
)

const broadcastEventHandlers = (data: AuthEventData<boolean>) => ({
	[tokenSetEvent]: () => window.localStorage.setItem('isAuthenticated', '1'),
	[tokenClearedEvent]: () => window.localStorage.removeItem('isAuthenticated')
})[data.type]

const authBroadcastChannel = new BroadcastChannel(authBroadCastChannelName)
authBroadcastChannel.onmessage = ({data}: MessageEvent) => broadcastEventHandlers(data)()

export {
	AuthEventData,
	authBroadCastChannelName,
	checkTokenEvent,
	setTokenEvent,
	tokenSetEvent,
	clearTokenEvent,
	tokenClearedEvent,
	setAuthToken,
	clearAuthToken
}
