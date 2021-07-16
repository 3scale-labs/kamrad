import SwaggerUI from 'swagger-ui'

import './styles/main.scss'

const renderApiDocs = (containerId: string, url: string ) => (
  SwaggerUI({
    dom_id: `#${containerId}`,
    url: url
  })
)

export { renderApiDocs }
