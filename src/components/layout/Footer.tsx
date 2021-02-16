import * as React from 'react'

import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
    return (
        <React.Fragment>
            <p className={styles.footerFont}>John Clay Kaufmann 2021</p>
        </React.Fragment>
    )
}
export default Footer
