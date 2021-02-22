/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import Link from 'next/link'
import styles from './Menu.module.scss'

interface Props {
  open: boolean
  setOpen: (val: boolean) => void
}

const Menu: React.VFC<Props> = ({ open, setOpen }) => {
  return (
    <nav className={open ? styles.openMenu : styles.closedMenu}>
      <Link href='/'>
        <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
          Home
        </a>
      </Link>
      {/* UNCOMMENT WHEN BLOG IS DONE
            <Link href='/Blog'>
                <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
                    Blog
                </a>
            </Link>
            */}
      <Link href='/Projects'>
        <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
          Projects
        </a>
      </Link>
      <Link href='/resume'>
        <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
          Resume
        </a>
      </Link>
    </nav>
  )
}
export default Menu
