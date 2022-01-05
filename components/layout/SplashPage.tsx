import * as React from 'react'
import Footer from '@components/layout/Footer'
import {
  Button,
  Center,
  Heading,
  Link,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react'
import styles from './SplashPage.module.scss'
import Header from '@components/layout/Header'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface props {}
interface SplashState {
  scrollPosition: number
}

export default class SplashPage extends React.Component<props, SplashState> {
  private ref = React.createRef<HTMLDivElement>()

  constructor(props: props) {
    super(props)
    this.state = {
      scrollPosition: 0,
    }
  }

  handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  handleScrollToAbout = (): void => {
    window.scrollTo({ top: this.ref.current?.offsetTop, behavior: 'smooth' })
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <div className={styles.splash}>
          <div className={styles.header}>
            <Header textColor="white" />
          </div>
          <div className={styles.mainContent}>
            <Center h="25vh">
              <VStack align="center">
                <Box
                  align="center"
                  color="white"
                  padding="2rem"
                  borderRadius="5px"
                  margin={{
                    base: '0 1rem',
                    sm: '0 5rem',
                    md: '0 10rem',
                    lg: '0 15rem',
                    xl: '0 20rem',
                  }}
                >
                  <Heading size="lg" opacity="1">
                    <span role="img" aria-label="Wave emoji">
                      &#128075;
                    </span>
                    &nbsp;Hey There! I&apos;m Clay.
                  </Heading>
                  <Text>Developer, photographer, explorer.</Text>
                </Box>
                <Button
                  className={styles.aboutButton}
                  onClick={this.handleScrollToAbout}
                >
                  About me.
                </Button>
              </VStack>
            </Center>
          </div>
          <Footer textColor="white" />
        </div>
        <div className={styles.container + ' ' + styles.about}>
          <div className={styles.mainContent} id="about-section">
            <VStack>
              <Text
                padding={{
                  base: '0 1rem',
                  sm: '0 5rem',
                  md: '0 10rem',
                  lg: '0 15rem',
                  xl: '0 20rem',
                }}
              >
                I was born and raised in Marin County, just north of the Golden
                Gate Bridge. From there, I decided to attend the University of
                Vermont, where I quickly fell in love with programming and
                computer science. After taking one computer science class, I
                switched my major from Chemistry to computer science, and began
                to work towards a degree.
              </Text>
              <Text
                padding={{
                  base: '0 1rem',
                  sm: '0 5rem',
                  md: '0 10rem',
                  lg: '0 15rem',
                  xl: '0 20rem',
                }}
              >
                Fast forward a couple of years, and I am now a senior, focusing
                on machine learning and backend systems. My expected graduation
                date is December 2021, where upon my graduation I will continue
                to attend the University of Vermont as a master&apos;s student,
                with an expected graduation date of December 2022.
              </Text>
              <Text
                padding={{
                  base: '0 1rem',
                  sm: '0 5rem',
                  md: '0 10rem',
                  lg: '0 15rem',
                  xl: '0 20rem',
                }}
              >
                I am currently looking for internship opportunities as well as
                post-graduation job opportunities for software engineering. If
                you are interested, let&apos;s{' '}
                <Link href="mailto:claykaufmann@gmail.com" color="blue">
                  get in touch.
                </Link>
              </Text>
            </VStack>
          </div>
          <Center className={styles.buttonContainer} ref={this.ref}>
            <Button
              className={styles.aboutButton}
              onClick={this.handleScrollToTop}
            >
              Back to top
            </Button>
          </Center>
          <Footer textColor="black" />
        </div>
      </React.Fragment>
    )
  }
}
