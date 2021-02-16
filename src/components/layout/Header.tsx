import * as React from 'react'
import Nav from './Nav'

import styles from './Header.module.scss'

const Header = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1 className={styles.heading}>Hi! I&apos;m (John) Clay Kaufmann</h1>
            <Nav />
        </React.Fragment>
    )
}
export default Header
