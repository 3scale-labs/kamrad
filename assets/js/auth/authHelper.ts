import {
	authBroadCastChannelName,
	AuthBroadcastEvent,
	AuthMessageEvent,
	AuthEventData,
	isAuthenticated
} from "./types"

const setAuthToken = (token: string) => (
	navigator.serviceWorker.controller.postMessage({
		type: AuthMessageEvent.SetTokenEvent,
		token: token
	})
)

const clearAuthToken = () => (
	navigator.serviceWorker.controller.postMessage({type: AuthMessageEvent.ClearTokenEvent})
)

const broadcastEventHandlers = ({data}: MessageEvent<AuthEventData<AuthBroadcastEvent,any>>) => (
	{
		[AuthBroadcastEvent.TokenSetEvent]: () => window.localStorage.setItem(isAuthenticated, '1'),
		[AuthBroadcastEvent.TokenClearedEvent]: () => window.localStorage.removeItem(isAuthenticated)
	}[data.type]()
)

const authBroadcastChannel = new BroadcastChannel(authBroadCastChannelName)
authBroadcastChannel.onmessage = broadcastEventHandlers

export {
	setAuthToken,
	clearAuthToken
}
