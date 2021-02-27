import * as React from 'react'
import Footer from './Footer'
import Header from './Header'

const Base: React.FC = props => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}
export default Base
