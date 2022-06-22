import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Thanks: https://stackoverflow.com/a/72700035
export const useUrlHash = (initialValue) => {
  const router = useRouter()
  const [hash, setHash] = useState(initialValue)

  const updateHash = (str) => {
    if (!str) return
    setHash(str.split('#')[1])
  }

  useEffect(() => {
    const onWindowHashChange = () => updateHash(window.location.hash)
    const onNextJSHashChange = (url) => updateHash(url)

    router.events.on('hashChangeStart', onNextJSHashChange)
    window.addEventListener('hashchange', onWindowHashChange)
    window.addEventListener('load', onWindowHashChange)
    return () => {
      router.events.off('hashChangeStart', onNextJSHashChange)
      window.removeEventListener('load', onWindowHashChange)
      window.removeEventListener('hashchange', onWindowHashChange)
    }
  }, [router.asPath, router.events])

  return hash
}