import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  VStack,
  Text,
} from '@chakra-ui/react'
import { FcHome } from 'react-icons/fc'
import { GiDuck } from 'react-icons/gi'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <Flex
        as="header"
        w="100%"
        h="10vh"
        alignItems="center"
        gap="2"
        bg="#E4B990"
        marginBottom="30px"
      >
        <Link to={'/'}>
          <Box margin="10px 10px 10px 10px" p="2">
            <FcHome size={50}></FcHome>
          </Box>
        </Link>
        <Link to={'/ducks'}>
          <Box margin="10px 10px 10px 10px" p="2">
            <GiDuck size={50}></GiDuck>
          </Box>
        </Link>
        <Spacer />
        <Heading fontFamily="shadows into  light" fontWeight="bold">
          DUCK FINDERZ
        </Heading>

        <Spacer />
        <VStack spacing="4px">
          <IfAuthenticated>
            <Container fontSize="s">
              {user && <p>Username: {user?.nickname}</p>}
            </Container>
            <Button
              variant="ghost"
              colorScheme="gray"
              fontSize="s"
              color="black"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Button
              margin="10px 10px 10px 10px"
              variant="ghost"
              colorScheme="gray"
              fontSize="s"
              color="black"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </IfNotAuthenticated>
        </VStack>
      </Flex>
    </>
  )
}

export default Nav
