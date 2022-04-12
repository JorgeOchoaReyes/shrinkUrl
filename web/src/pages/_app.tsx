import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStateProvider } from '../Context'
import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalStateProvider>
  )
}

export default MyApp
