import * as React from 'react'
import Footer from '@components/layout/Footer'
import { Button, Center, Heading, Link, Text, VStack, Box } from '@chakra-ui/react'
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
            <Header />
          </div>
          <div className={styles.mainContent}>
            <Center h='40vh'>
              <VStack align='center'>
                <Box align='center' bg='rgba(255, 255, 255, 0.8)' padding='2rem' borderRadius='5px'>
                  <Heading size='lg' opacity='1'>
                    Hey there!
                  </Heading>
                  <Text align='center' opacity='1'>
                    My name is Clay Kaufmann, and I am endeavoring software engineer, studying
                    computer science at the University of Vermont.
                  </Text>
                </Box>
                <Button className={styles.aboutButton} onClick={this.handleScrollToAbout}>
                  About me.
                </Button>
              </VStack>
            </Center>
          </div>
          <Footer />
        </div>
        <div className={styles.container}>
          <div className={styles.mainContent}>
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
                I was born and raised in Marin County, just north of the Golden Gate Bridge. From
                there, I decided to attend the University of Vermont, where I quickly fell in love
                with programming and computer science. After taking one computer science class, I
                switched my major from Chemistry to computer science, and began to work towards a
                degree.
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
                Fast forward a couple of years, and I am now a junior, focusing in full-stack web
                development, as well as machine learning. My expected graduation date is December
                2021, where upon my graduation I will continue to attend the University of Vermont
                as a prospective master&apos;s student, with an expected graduation date of December
                2022.
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
                I am currently looking for internship opportunities as well as post-graduation job
                opportunities for software engineering, if you are interested, let&apos;s{' '}
                <Link href='mailto:claykaufmann@gmail.com' color='blue'>
                  get in touch.
                </Link>
              </Text>
            </VStack>
          </div>
          <Center className={styles.buttonContainer} ref={this.ref}>
            <Button className={styles.aboutButton} onClick={this.handleScrollToTop}>
              Back to top
            </Button>
          </Center>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}
