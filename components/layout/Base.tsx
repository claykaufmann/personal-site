import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Base.module.scss'

interface props {
  headerColor: string
  children: JSX.Element[] | JSX.Element
}

const Base = ({ headerColor, children }: props) => {
  return (
    <React.Fragment>
      <Header textColor={headerColor} />
      <div className={styles.content}>{children}</div>
      <Footer textColor="black" />
    </React.Fragment>
  )
}
export default Base
