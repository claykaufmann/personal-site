import * as React from 'react'
import { NextPage } from 'next'
import LandingPage from '@components/layout/Splash/LandingPage'
import About from '@components/layout/Splash/About'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <About />
    </React.Fragment>
  )
}

export default Home
