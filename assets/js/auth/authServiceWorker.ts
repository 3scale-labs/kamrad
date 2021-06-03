import { FetchEvent } from "../types/service-worker"
import {
  AuthMessageEvent,
  AuthBroadcastEvent,
  AuthEventData,
  authBroadCastChannelName
} from "./types"

// TODO: Get whitelistedOrigins from ENV.
const whitelistedOrigins: string[] = [
  'http://localhost',
  'http://localhost:8080'
]

const whitelistedPathRegex = /\/api\/[^.]*$/ // anything under /api

const worker = self as unknown as ServiceWorker

// This is safe, it resides within the scope of the Service Worker
let token: string = ''

const authBroadcastChannel = new BroadcastChannel(authBroadCastChannelName)

const setToken = (value: string) => {
  token = value
  authBroadcastChannel.postMessage({type: AuthBroadcastEvent.TokenSetEvent})
  console.log("token set!")
}

const clearToken = () => {
  token = ''
  authBroadcastChannel.postMessage({type: AuthBroadcastEvent.TokenClearedEvent})
  console.log("token cleared!")
}

const checkToken = () => {
  authBroadcastChannel.postMessage({type: AuthMessageEvent.CheckTokenEvent, payload: token.length > 0})
  console.log('Token?', token.length > 0)
}

const messageEventsHandlers = ({data}: MessageEvent<AuthEventData<AuthMessageEvent,any>>) => (
  {
    [AuthMessageEvent.SetTokenEvent]: () => setToken(data.payload),
    [AuthMessageEvent.ClearTokenEvent]: clearToken,
    [AuthMessageEvent.CheckTokenEvent]: checkToken
  }[data.type]()
)

worker.addEventListener('message', messageEventsHandlers)

const addAuthHeader = (event: FetchEvent) => {
  const destURL = new URL(event.request.url)
  if (whitelistedOrigins.includes(destURL.origin) && whitelistedPathRegex.test(destURL.pathname)) {
    const modifiedHeaders = new Headers(event.request.headers)
    if (token) modifiedHeaders.append('Authorization', token)
    const authReq = new Request(event.request, {headers: modifiedHeaders, mode: 'cors' })
    event.respondWith((async () => fetch(authReq))())
  }
}

worker.addEventListener('fetch', addAuthHeader)
