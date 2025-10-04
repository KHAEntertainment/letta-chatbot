'use client'

import { useEffect } from 'react'

export default function SWRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return

    const url = '/sw.js'

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register(url, { scope: '/' })
        // Attempt to update on load
        reg.update().catch(() => {})
      } catch (err) {
        // no-op
      }
    }

    // Defer until idle/after load for faster TTI
    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(register)
    } else {
      window.addEventListener('load', register, { once: true })
    }

    return () => {
      window.removeEventListener('load', register as any)
    }
  }, [])

  return null
}
