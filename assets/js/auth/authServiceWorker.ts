import { FetchEvent, Client } from "../types/service-worker"
import { isTokenSetEvent, setTokenEvent, clearTokenEvent } from "./authHelper"

// TODO: Get whitelistedOrigins from ENV.
const whitelistedOrigins: string[] = [
	'http://localhost',
	'http://localhost:8080'
]

const whitelistedPathRegex = /\/api\/[^.]*$/ // anything under /api

const worker = self as unknown as ServiceWorker

// This is safe, it resides within the scope of the Service Worker
let token: string = ''

const setToken = (event: MessageEvent) => {
	if (event.data.type === setTokenEvent) {
		token = event.data.token
		console.log("token set!")
	}
}

const clearToken = (event: MessageEvent) => {
	if (event.data.type === clearTokenEvent) {
		token = ''
		console.log("token cleared!")
	}
}

const addAuthHeader = function (event: FetchEvent) {
	const destURL = new URL(event.request.url)
	if (whitelistedOrigins.includes(destURL.origin) && whitelistedPathRegex.test(destURL.pathname)) {
		const modifiedHeaders = new Headers(event.request.headers)
		if (token) modifiedHeaders.append('Authorization', token)
		const authReq = new Request(event.request, {headers: modifiedHeaders, mode: 'cors' })
		event.respondWith((async () => fetch(authReq))())
	}
}

const checkToken = (event: MessageEvent) => {
	if (event.data.type === isTokenSetEvent) {
		console.log('Token?', token.length > 0)
		// @ts-ignore Client interface is not included in TS
		worker.clients.matchAll()
			.then((clientList: Client[]) => (
				// Communicate to every client listening the state of the token
				clientList.forEach((client) => client.postMessage(token.length > 0))
			))
	}
}

// add event listeners for received messages
[setToken, clearToken, checkToken].forEach(
	action => worker.addEventListener('message', action)
)
worker.addEventListener('fetch', addAuthHeader)
