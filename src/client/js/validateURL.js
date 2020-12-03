function validateURL(text) {
  const url = /^https?:\/\//gi
  return url.test(text)
}

export { validateURL }