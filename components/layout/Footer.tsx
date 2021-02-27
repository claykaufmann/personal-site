import * as React from 'react'
import { HStack, IconButton, Link, Text } from '@chakra-ui/react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import styles from './Footer.module.scss'

const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <HStack className={styles.footer} align='center'>
        <Text fontSize='xs'>John Clay Kaufmann 2021</Text>
        <Link href='https://www.github.com/claykaufmann' isExternal={true}>
          <IconButton aria-label='GitHub link' as={AiFillGithub} variant='ghost' size='xs' />
        </Link>
        <Link href='https://www.instagram.com/byclaykay/' isExternal={true}>
          <IconButton
            aria-label='Instagram link'
            as={AiOutlineInstagram}
            variant='ghost'
            size='xs'
          />
        </Link>
        <Link href='mailto:claykaufmann@gmail.com'>
          <IconButton aria-label='Email link' as={AiOutlineMail} variant='ghost' size='xs' />
        </Link>
      </HStack>
    </footer>
  )
}
export default Footer
