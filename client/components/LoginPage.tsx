import {
  Text,
  Box,
  Center,
  Button,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react'
import { GiDuck } from 'react-icons/gi'
import { CgNotes } from 'react-icons/cg'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [visibility, setVisibility] = useState(false)

  const { loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  const quack = new Audio('/audio/trimmed-quack.mp3')

  const handleClick = () => {
    quack.play()
    setVisibility(!visibility)
  }

  return (
    <>
      <Box
        bgImage="url('/images/duck_background_1.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        height="100vh"
      >
        <Popover>
          <Center>
            <ButtonGroup marginTop="50vh">
              <Button
                leftIcon={<GiDuck />}
                borderColor="black"
                borderWidth="1px"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <PopoverTrigger>
                <Button
                  rightIcon={<CgNotes />}
                  borderColor="black"
                  borderWidth="1px"
                  onClick={handleClick}
                >
                  More Details
                </Button>
              </PopoverTrigger>
              <Link to={'/ducks'}>
                <Button borderColor="black" borderWidth="1px">
                  Ducks
                </Button>
              </Link>
            </ButtonGroup>
          </Center>
          <PopoverContent>
            <Center marginTop="8px">
              {visibility ? (
                <PopoverBody>
                  <Text
                    maxW="70vh"
                    fontSize="xs"
                    lineHeight="100%"
                    opacity="100"
                  >
                    Embark on a whimsical web adventure as you use this
                    extension to discover and collect adorable ducks hidden
                    throughout various webpages. Simply install the extension,
                    and watch as charming ducks pop up, waiting to be added to
                    your personal collection.
                    <br />
                    <br />
                    Access your own dedicated page showcasing the delightful
                    ducks you&apos;ve amassed. Each duck comes with its own
                    unique charm, adding a touch of joy to your online journey.
                    <br />
                    <br />
                    Designed collaboratively by a team of skilled
                    developers—Tayne, T, Sam, Mike, and Joana, Duck Collector
                    combines creativity and functionality for a delightful user
                    experience. Turn your browsing routine into a delightful
                    duck-hunting adventure with Duck Finderz, an extension that
                    brings a touch of whimsy to your online world.
                  </Text>
                </PopoverBody>
              ) : null}
            </Center>{' '}
            <Center></Center>{' '}
          </PopoverContent>
        </Popover>
      </Box>
    </>
  )
}
