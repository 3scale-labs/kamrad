import { renderApiDocs } from "./api-docs/renderApiDocs"

document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.getElementsByClassName('api-docs'))
    .forEach((node: HTMLElement) =>
      renderApiDocs(node.id, node.dataset.spec)
    )
})
