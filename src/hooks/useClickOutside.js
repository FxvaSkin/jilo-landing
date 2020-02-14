import { useEffect, useCallback } from 'react'

const useClickOutside = (ref, callback) => {
  const handleMouseUp = useCallback(
    event => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('drop', handleMouseUp)
      if (
        ref.current &&
        event.type === 'mouseup' &&
        !ref.current.contains(event.target)
      ) {
        callback && callback()
      }
    },
    [ref, callback],
  )

  const handleMouseDown = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        document.addEventListener('mouseup', handleMouseUp, { once: true })
        document.addEventListener('drop', handleMouseUp, { once: true })
      }
    },
    [ref, handleMouseUp],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('drop', handleMouseUp)
    }
  }, [handleMouseDown, handleMouseUp])
}

export { useClickOutside }
