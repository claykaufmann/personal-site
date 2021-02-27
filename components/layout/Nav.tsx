/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import { useState, useRef } from 'react'
import Burger from '@components/BurgerMenu/Burger'
import Menu from '@components/BurgerMenu/Menu'
import { useMediaQuery } from '@components/hooks/useMediaQuery'
import { useOnClickOutside } from '@components/hooks/useOnClickOutside'
import { Link, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'

import styles from './Nav.module.scss'

const Nav: React.VFC = () => {
  // check the size of the browser window, if less than 800px, use the burger menu
  const isMobile = useMediaQuery('(max-width: 800px)')
  let nav: JSX.Element = <React.Fragment></React.Fragment>

  const [open, setOpen] = useState(false)
  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setOpen(false))

  if (isMobile) {
    nav = (
      <div ref={node} className={styles.burgerDiv}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    )
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
        <NextLink href='/Projects'>
          <Link>Projects</Link>
        </NextLink>
        <Link href='other/john_clay_kaufmann.pdf'>Resume</Link>
      </HStack>
    )
  }
  return <React.Fragment>{nav}</React.Fragment>
}
export default Nav
