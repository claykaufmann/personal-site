import * as React from 'react'
import Footer from '@components/layout/Footer'
import { NextPage } from 'next'
import LandingPage from '@components/layout/LandingPage'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Home
