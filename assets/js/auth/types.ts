const authBroadCastChannelName = 'broadcastAuthChannel'
const isAuthenticated = 'isAuthenticated'

enum AuthBroadcastEvent {
  TokenSetEvent = 'TOKEN_SET',
  TokenClearedEvent = 'TOKEN_CLEARED',
  TokenCheckedEvent = 'TOKEN_CHECKED'
}

enum AuthMessageEvent {
  CheckTokenEvent = 'CHECK_TOKEN',
  SetTokenEvent = 'SET_TOKEN',
  ClearTokenEvent = 'CLEAR_TOKEN',
}

interface AuthEventData<T,P> {
  type: T,
  payload?: P
}

export {
  isAuthenticated,
  authBroadCastChannelName,
  AuthBroadcastEvent,
  AuthMessageEvent,
  AuthEventData
}
