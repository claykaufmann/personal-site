import * as React from 'react'
import Nav from './Nav'

import styles from './Header.module.scss'

const Header = (): JSX.Element => {
  return (
    <React.Fragment>
      <Nav />
      <h1 className={styles.heading}>John Clay Kaufmann</h1>
    </React.Fragment>
  )
}
export default Header
