import { useEffect } from 'react'
/* matching view position with hash anchor */
const useMatchPosition = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      element &&
        element.scrollIntoView({
          behavior: 'auto',
        })
      window.scrollBy(0, -3.5 * 16)
    }
  }, [])
}

export { useMatchPosition }
