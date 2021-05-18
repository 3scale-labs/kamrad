export default function markdownTemplate(content, data) {
  return content.replace(/{{(.+)}}/g, (match, key) => {
    const value = data[key]
    if (typeof value !== 'undefined') {
      return value
    }
    return match
  })
}
