import * as React from 'react'
import { HStack, IconButton, Link, Text } from '@chakra-ui/react'
import { AiFillGithub, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import styles from './Footer.module.scss'

interface props {
  textColor: string
}

const Footer: React.VFC<props> = ({ textColor }) => {
  return (
    <HStack className={styles.footer}>
      <Text color={textColor} fontSize='xs'>
        John Clay Kaufmann 2021
      </Text>
      <Link href='https://www.github.com/claykaufmann' isExternal={true}>
        <IconButton
          color={textColor}
          colorScheme='whiteAlpha'
          className={styles.icon}
          aria-label='GitHub link'
          as={AiFillGithub}
          variant='ghost'
          size='xs'
        />
      </Link>
      <Link href='https://www.instagram.com/byclaykay/' isExternal={true}>
        <IconButton
          color={textColor}
          colorScheme='whiteAlpha'
          className={styles.icon}
          aria-label='Instagram link'
          as={AiOutlineInstagram}
          variant='ghost'
          size='xs'
        />
      </Link>
      <Link href='mailto:claykaufmann@gmail.com'>
        <IconButton
          color={textColor}
          colorScheme='whiteAlpha'
          className={styles.icon}
          aria-label='Email link'
          as={AiOutlineMail}
          variant='ghost'
          size='xs'
        />
      </Link>
    </HStack>
  )
}
export default Footer
