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
      <NextLink href='/'>
        <Link className={styles.menuLinkText} onClick={() => setOpen(!open)}>
          Home
        </Link>
      </NextLink>
      {/* UNCOMMENT WHEN BLOG IS DONE
            <NextLink href='/Blog'>
                <Link className={styles.menuLinkText} onClick={() => setOpen(!open)}>
                    Blog
                </Link>
            </NextLink>
            */}
      <NextLink href='/projects'>
        <Link className={styles.menuLinkText} onClick={() => setOpen(!open)}>
          Projects
        </Link>
      </NextLink>
      <Link
        href='/other/john_clay_kaufmann.pdf'
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
