import * as React from 'react'
import SwaggerUI from "swagger-ui-react"
//import "swagger-ui-react/swagger-ui.css"

interface Props {
  url: string
}

export const APIDocs = ({ url }: Props) => (
  <SwaggerUI url={url} />
)
