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
    payload: token
  } as AuthEventData<AuthMessageEvent, string>)
)

const clearAuthToken = () => (
  navigator.serviceWorker.controller.postMessage({
    type: AuthMessageEvent.ClearTokenEvent
  } as AuthEventData<AuthMessageEvent, null>)
)

const broadcastEventHandlers = ({data}: MessageEvent<AuthEventData<AuthBroadcastEvent,any>>) => (
  {
    [AuthBroadcastEvent.TokenSetEvent]: () => window.localStorage.setItem(isAuthenticated, '1'),
    [AuthBroadcastEvent.TokenClearedEvent]: () => window.localStorage.removeItem(isAuthenticated),
    [AuthBroadcastEvent.TokenCheckedEvent]: () => {}
  }[data.type]()
)

const authBroadcastChannel = new BroadcastChannel(authBroadCastChannelName)
authBroadcastChannel.onmessage = broadcastEventHandlers

export {
  setAuthToken,
  clearAuthToken
}
