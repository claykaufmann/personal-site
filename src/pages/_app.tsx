import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from '../components/layout/Head'
import '../styles/global/globals.scss'

const App: React.VFC<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App
