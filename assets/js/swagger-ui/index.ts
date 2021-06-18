import SwaggerUI from 'swagger-ui'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('swagger-ui-wrapper')
  if (!container) {
    return undefined
  }

  SwaggerUI({
    dom_id: '#swagger-ui-wrapper',
    url: container.dataset.url
  })
})
