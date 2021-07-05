import SwaggerUI from 'swagger-ui'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('api-docs')
  if (!container) {
    return undefined
  }

  SwaggerUI({
    dom_id: '#api-docs',
    url: container.dataset.url
  })
})
