import React from 'react'
import { RedocStandalone } from 'redoc'

interface Props {
  url: string
}

const Redoc = ({url}: Props) => (
  <RedocStandalone specUrl={url} />
)

export { Redoc }
