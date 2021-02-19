import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from '@components/layout/Head'
import { Global } from '@emotion/react'
import theme from '@styles/theme'
import fonts from '@styles/font-face'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.VFC<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props
    return (
        <ChakraProvider theme={theme}>
            <Global styles={fonts} />
            <Head />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
