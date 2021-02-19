import * as React from 'react'
import Nav from './Nav'
import { Heading } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <React.Fragment>
      <Nav />
      <Heading as='h1'>John Clay Kaufmann</Heading>
    </React.Fragment>
  )
}
export default Header
