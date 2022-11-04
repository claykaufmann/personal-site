import * as React from 'react'
import Nav from './Nav'
import { Heading, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from './Header.module.scss'

interface props {
  textColor: string
}

const Header: React.FC<props> = ({ textColor }) => {
  return (
    <HStack justify="space-between" className={styles.header}>
      <NextLink href={'/'} passHref>
        <Heading as="h1" cursor={'pointer'} size="xl" color={textColor}>
          Clay Kaufmann
        </Heading>
      </NextLink>

      <Nav textColor={textColor} />
    </HStack>
  )
}
export default Header
