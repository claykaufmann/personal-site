import * as React from 'react'
import Nav from './Nav'
import { Heading, HStack } from '@chakra-ui/react'
import styles from './Header.module.scss'

const Header: React.VFC = () => {
  return (
    <HStack justify='space-between' className={styles.header}>
      <Heading as='h1' size='xl' color='white'>
        Clay Kaufmann
      </Heading>
      <Nav />
    </HStack>
  )
}
export default Header
