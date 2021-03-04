import * as React from 'react'
import { useMediaQuery } from '@components/hooks/useMediaQuery'
import { Link, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import BurgerMenu from '@components/BurgerMenu/BurgerMenu'

import styles from './Nav.module.scss'

const Nav: React.VFC = () => {
  // check the size of the browser window, if less than 800px, use the burger menu
  const isMobile = useMediaQuery('(max-width: 800px)')
  let nav: JSX.Element = <React.Fragment></React.Fragment>

  if (isMobile) {
    nav = <BurgerMenu />
  } else {
    nav = (
      <HStack className={styles.nav}>
        <NextLink href='/'>
          <Link>Home</Link>
        </NextLink>
        {/* UNCOMMENT WHEN BLOG IS DONE
            <Link href='/Blog'>
                <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
                    Blog
                </a>
            </Link>
            */}
        <NextLink href='/projects'>
          <Link>Projects</Link>
        </NextLink>
        <Link href='other/john_clay_kaufmann.pdf' isExternal={true}>
          Resume
        </Link>
      </HStack>
    )
  }
  return <React.Fragment>{nav}</React.Fragment>
}
export default Nav
