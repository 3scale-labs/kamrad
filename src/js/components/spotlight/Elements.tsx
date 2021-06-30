import * as React from 'react'
import { API } from '@stoplight/elements'
import './styles.css'


interface Props {
  url: string
}

export const Elements = ({ url }: Props) => {
  return (
    <API
      apiDescriptionUrl={url}
      router="history"
      layout="stacked"
    />
  )
}

