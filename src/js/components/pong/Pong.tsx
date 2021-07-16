import React, { useState, SyntheticEvent, ChangeEvent } from 'react'

export const Pong = () => {
  const [pong, setPong] = useState('')
  const [loading, setLoading] = useState(true)

  async function ping() {
    // TODO: get host from configuration
    const response = await fetch('http://kamwiel-authorino.127.0.0.1.nip.io:8000/ping')
    if (!response.ok) throw response
    const data = await response.text()
    return data
  }

  const handleOnClick = (event: SyntheticEvent) => {
    event.preventDefault()
    ping()
      .then((pong: string) => setPong(pong)
      )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <button style={{"textAlign":"center", "padding": "11px 5px", "borderRadius": "50%", "cursor": "help", "margin": "0 30px 0 0"}} onClick={handleOnClick}>Ping</button>
      { loading ?
        <p>common! click it!...</p>
        : <p style={{"display": "inline-block", "borderRadius":"50%", "textTransform": "uppercase", "textAlign":"center", "fontSize": "60px", "background": "rebeccapurple", "padding": "80px 40px"}}>{pong}!</p> }
    </>
  )
}
