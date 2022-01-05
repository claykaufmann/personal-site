/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'

import NextLink from 'next/link'
import styles from './Menu.module.scss'
import { Link } from '@chakra-ui/react'

interface Props {
  open: boolean
  setOpen: (val: boolean) => void
}

const Menu: React.VFC<Props> = ({ open, setOpen }) => {
  return (
    <nav className={open ? styles.openMenu : styles.closedMenu}>
      <NextLink href="/#about-section">
        <Link
          style={{ textDecoration: 'none' }}
          transition="color 0.3s linear"
          color="black"
          className={styles.menuLinkText}
          onClick={() => setOpen(!open)}
        >
          About
        </Link>
      </NextLink>
      <NextLink href="/projects">
        <Link
          style={{ textDecoration: 'none' }}
          transition="color 0.3s linear"
          color="black"
          className={styles.menuLinkText}
          onClick={() => setOpen(!open)}
        >
          Projects
        </Link>
      </NextLink>
      {/* <NextLink href='/blog'>
        <Link
          style={{ textDecoration: 'none' }}
          transition='color 0.3s linear'
          color='black'
          className={styles.menuLinkText}
          onClick={() => setOpen(!open)}
        >
          Blog
        </Link>
      </NextLink> */}
      <Link
        style={{ textDecoration: 'none' }}
        transition="color 0.3s linear"
        color="black"
        href="/other/John-Clay-Kaufmann-website.pdf"
        isExternal={true}
        className={styles.menuLinkText}
        onClick={() => setOpen(!open)}
      >
        Resume
      </Link>
    </nav>
  )
}
export default Menu
