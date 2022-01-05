import * as React from 'react'
import { useMediaQuery } from '@components/hooks/useMediaQuery'
import { Link, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import BurgerMenu from '@components/BurgerMenu/BurgerMenu'

import styles from './Nav.module.scss'

interface props {
  textColor: string
}

const Nav: React.VFC<props> = ({ textColor }) => {
  // check the size of the browser window, if less than 800px, use the burger menu
  const isMobile = useMediaQuery('(max-width: 800px)')
  let nav: JSX.Element = <React.Fragment></React.Fragment>

  if (isMobile) {
    nav = <BurgerMenu textColor={textColor} />
  } else {
    nav = (
      <HStack className={styles.nav} color={textColor}>
        <NextLink href="/#about-section">
          <Link>About</Link>
        </NextLink>
        <NextLink href="/projects">
          <Link>Projects</Link>
        </NextLink>
        {/* <NextLink href='/blog'>
					<Link>Blog</Link>
				</NextLink> */}
        <Link href="other/John-Clay-Kaufmann-website.pdf" isExternal={true}>
          Resume
        </Link>
      </HStack>
    )
  }
  return <React.Fragment>{nav}</React.Fragment>
}
export default Nav
