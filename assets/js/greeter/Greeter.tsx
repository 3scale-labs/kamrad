import React, { useState, useEffect } from 'react'

interface Props {
  id: string
}

export const Greeter = ({id}: Props) => {
  const [name, setName] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getSWCharacter(id: string) {
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
      .finally(() => setLoading(false))
  })

  return loading ? <p>waaaaait for it...</p> : <p>Hello {name}!</p>
}
