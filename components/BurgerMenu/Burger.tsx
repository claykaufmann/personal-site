/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import styles from './Burger.module.scss'

interface Props {
  open: boolean
  setOpen: (val: boolean) => void
  textColor: string
}

const Burger = ({ open, setOpen, textColor }: Props) => {
  let burgerBars
  if (textColor == 'white') {
    burgerBars = styles.burgerBarWhite
  } else {
    burgerBars = styles.burgerBarBlack
  }
  return (
    <div
      className={open ? styles.cross : styles.burger}
      onClick={() => setOpen(!open)}
    >
      <div className={burgerBars} />
      <div className={burgerBars} />
      <div className={burgerBars} />
    </div>
  )
}

export default Burger
