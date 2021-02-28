import * as React from 'react'
import { useState, useRef } from 'react'
import Burger from './Burger'
import Menu from './Menu'
import { useOnClickOutside } from '@components/hooks/useOnClickOutside'

const BurgerMenu: React.VFC = () => {
  const [open, setOpen] = useState(false)
  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

export default BurgerMenu
