import * as React from 'react'
import { useMediaQuery } from '@components/hooks/useMediaQuery'
import { Link, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import NextLink from 'next/link'

import styles from './Nav.module.scss'

const Nav: React.VFC = () => {
  // check the size of the browser window, if less than 800px, use the burger menu
  const isMobile = useMediaQuery('(max-width: 800px)')
  let nav: JSX.Element = <React.Fragment></React.Fragment>

  if (isMobile) {
    nav = (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Menu'
          icon={<AiOutlineMenu />}
          variant='ghost'
          size='lg'
        ></MenuButton>
        <MenuList>
          <MenuItem>
            <NextLink href='/'>
              <Link>Home</Link>
            </NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href='/Projects'>
              <Link>Projects</Link>
            </NextLink>
          </MenuItem>
          <MenuItem>
            <Link href='other/john_clay_kaufmann.pdf'>Resume</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    )
  } else {
    nav = (
      <HStack className={styles.nav}>
        <NextLink href='/'>
          <Link>Home</Link>
        </NextLink>
        {/* UNCOMMENT WHEN BLOG IS DONE
            <Link href='/Blog'>
                <a className={styles.menuLinkText} onClick={() => setOpen(!open)}>
                    Blog
                </a>
            </Link>
            */}
        <NextLink href='/Projects'>
          <Link>Projects</Link>
        </NextLink>
        <Link href='other/john_clay_kaufmann.pdf'>Resume</Link>
      </HStack>
    )
  }
  return <React.Fragment>{nav}</React.Fragment>
}
export default Nav
