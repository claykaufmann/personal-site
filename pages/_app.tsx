import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from '@components/layout/Head'
import { Global } from '@emotion/react'
import theme from '@styles/theme'
import fonts from '@styles/font-face'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

import 'styles/globals.scss'

const App: React.VFC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Head />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5EVMWCSQ4X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
