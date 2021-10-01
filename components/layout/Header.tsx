import * as React from 'react'
import Nav from './Nav'
import { Heading, HStack } from '@chakra-ui/react'
import styles from './Header.module.scss'

interface props {
  textColor: string
}

const Header: React.VFC<props> = ({ textColor }) => {
  return (
    <HStack justify='space-between' className={styles.header}>
      <Heading as='h1' size='xl' color={textColor}>
        Clay Kaufmann
      </Heading>
      <Nav textColor={textColor} />
    </HStack>
  )
}
export default Header
