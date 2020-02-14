import { useState, useEffect } from 'react'

const useTooltip = ({ fadeDelay = 60 } = {}) => {
  const [currentTooltip, setCurrentTooltip] = useState(null)
  const [timer, setTimer] = useState()

  const handleHover = (elem, label, position) => {
    setTimer(null)
    setCurrentTooltip({ elem, label, position })
  }

  const handleUnhover = () => {
    setTimer(fadeDelay)
  }

  useEffect(() => {
    let timeout
    if (timer) {
      timeout = setTimeout(() => {
        setCurrentTooltip(null)
        setTimer(null)
      }, timer)
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [timer])

  return {
    target: currentTooltip,
    onHover: handleHover,
    onUnhover: handleUnhover,
  }
}

export { useTooltip }
