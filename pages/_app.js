import '../styles/globals.css'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
const clientSideEmotionCache = createCache({key : 'css'})
function MyApp({ Component, pageProps , emotion = clientSideEmotionCache}) {
  return (
    <CacheProvider value={emotion}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
 