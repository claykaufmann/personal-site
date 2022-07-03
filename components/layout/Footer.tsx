import * as React from 'react'
import { HStack, IconButton, Link, Text } from '@chakra-ui/react'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import styles from './Footer.module.scss'

interface props {
  textColor: string
}

const Footer: React.VFC<props> = ({ textColor }) => {
  return (
    <HStack className={styles.footer}>
      <Text textColor={textColor}>
        <Link href="https://claykaufmann.com">Clay Kaufmann 2022</Link>
      </Text>
      <Link href="https://www.github.com/claykaufmann" isExternal={true}>
        <IconButton
          color={textColor}
          colorScheme="whiteAlpha"
          className={styles.icon}
          aria-label="GitHub profile link"
          as={AiFillGithub}
          variant="ghost"
          size="xs"
        />
      </Link>
      <Link href="https://www.instagram.com/byclaykay/" isExternal={true}>
        <IconButton
          color={textColor}
          colorScheme="whiteAlpha"
          className={styles.icon}
          aria-label="Instagram profile link"
          as={AiOutlineInstagram}
          variant="ghost"
          size="xs"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/claykaufmann/" isExternal={true}>
        <IconButton
          color={textColor}
          colorScheme="whiteAlpha"
          className={styles.icon}
          aria-label="LinkedIn profile link"
          as={AiOutlineLinkedin}
          variant="ghost"
          size="xs"
        />
      </Link>
      <Link href="mailto:claykaufmann@gmail.com">
        <IconButton
          color={textColor}
          colorScheme="whiteAlpha"
          className={styles.icon}
          aria-label="Email link"
          as={AiOutlineMail}
          variant="ghost"
          size="xs"
        />
      </Link>
    </HStack>
  )
}
export default Footer
