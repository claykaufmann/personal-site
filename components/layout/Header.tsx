import * as React from 'react'
import Nav from './Nav'
import { Heading, HStack, Link } from '@chakra-ui/react'
import styles from './Header.module.scss'
import NextLink from 'next/link'

interface props {
  textColor: string
}

const Header: React.VFC<props> = ({ textColor }) => {
  return (
    <HStack justify="space-between" className={styles.header}>
      <NextLink href="/">
        <Link>
          <Heading as="h1" size="xl" color={textColor}>
            Clay Kaufmann
          </Heading>
        </Link>
      </NextLink>

      <Nav textColor={textColor} />
    </HStack>
  )
}
export default Header
