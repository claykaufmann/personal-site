import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Base.module.scss'

const Base: React.FC = Props => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.content}>{Props.children}</div>
      <Footer />
    </React.Fragment>
  )
}
export default Base
