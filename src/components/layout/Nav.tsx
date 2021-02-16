/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import { useState, useRef } from 'react'
import Burger from '../BurgerMenu/Burger'
import Menu from '../BurgerMenu/Menu'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import Link from 'next/link'

import styles from './Nav.module.scss'

const Nav = (): JSX.Element => {
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
            <nav className={styles.nav}>
                <Link href='/'>
                    <a className={styles.navElement}>Home</a>
                </Link>
                {/* UNCOMMENT WHEN BLOG IS DONE
            <Link href='/Blog'>
                <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
                    Blog
                </a>
            </Link>
            */}
                <Link href='/Projects'>
                    <a className={styles.navElement}>Projects</a>
                </Link>
                <a className={styles.navElement} href='other/john_clay_kaufmann.pdf'>
                    Resume
                </a>
            </nav>
        )
    }
    return <React.Fragment>{nav}</React.Fragment>
}
export default Nav
