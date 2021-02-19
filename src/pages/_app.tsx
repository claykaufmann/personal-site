import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from '@components/layout/Head'
import { ChakraProvider } from '@chakra-ui/react'
import '@styles/global/globals.scss'
import theme from '@styles/theme/theme'

const App: React.VFC<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props
    return (
        <ChakraProvider theme={theme}>
            <Head />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
