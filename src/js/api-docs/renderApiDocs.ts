import SwaggerUI from 'swagger-ui'

const renderApiDocs = (containerId: string, url: string ) => (
  SwaggerUI({
    dom_id: `#${containerId}`,
    url: url
  })
)

export { renderApiDocs }
