import SwaggerUI from 'swagger-ui'

const urlExpression = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
const urlRegex = new RegExp(urlExpression)

const renderApiDocs = (containerId: string, spec: string ) => {
  const isSpecUrl = !!spec.match(urlRegex)
  const swaggerOptions = {
    dom_id: `#${containerId}`,
    [isSpecUrl ? 'url' : 'spec']: isSpecUrl ? spec : JSON.parse(spec)
  }
  SwaggerUI(swaggerOptions)
}

export { renderApiDocs }
