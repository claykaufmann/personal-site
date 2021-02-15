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
    const isMobile = useMediaQuery('(max-width: 800px)')
    let innerNav: JSX.Element = <></>

    const [open, setOpen] = useState(false)
    const node = useRef<HTMLDivElement>(null)
    useOnClickOutside(node, () => setOpen(false))

    if (isMobile) {
        innerNav = (
            <div ref={node} className={styles.burgerDiv}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        )
    } else {
        innerNav = (
            <div>
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
            </div>
        )
    }
    return <React.Fragment>{innerNav}</React.Fragment>
}
export default Nav
