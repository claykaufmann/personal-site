/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import styles from './Burger.module.scss'

interface Props {
  open: boolean
  setOpen: (val: boolean) => void
}

const Burger: React.VFC<Props> = ({ open, setOpen }) => {
  return (
    <div className={open ? styles.cross : styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.burgerBar} />
      <div className={styles.burgerBar} />
      <div className={styles.burgerBar} />
    </div>
  )
}

export default Burger
