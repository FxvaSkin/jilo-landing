const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location.replace('/')
  }
  return null
}

export default NotFoundPage
