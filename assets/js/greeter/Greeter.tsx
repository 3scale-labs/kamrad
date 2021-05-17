import React, { useState, useEffect } from 'react'

interface Props {
	id: number
}

export const Greeter = ({id}: Props) => {
	const [name, setName] = useState(null)
	const [loading, setLoading] = useState(true)

	async function getSWCharacter (id: number) {
		const response = await fetch(`http://swapi.dev/api/people/${id}/`)
		if (!response.ok) throw response
		const data = await response.json()
		return data.name
	}

	useEffect(() => {
		getSWCharacter(id)
			.then((name: string) => setName(name)
			)
			.catch(error => console.log(error))
			.finally(_ => setLoading(false))
	})

	return loading ? <p>waaaaait for it...</p> : <p>Hello {name}!</p>
}
