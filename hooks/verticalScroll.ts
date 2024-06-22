// useBodyScrollLock.ts
import { useEffect } from 'react'

export default function verticalScroll(show: boolean): void {
  useEffect(() => {
    if (show) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = 'auto'
    }
    // Clean up the effect on unmount or when `show` changes
    return () => {
      document.documentElement.style.overflowY = 'auto'
    }
  }, [show])
}
