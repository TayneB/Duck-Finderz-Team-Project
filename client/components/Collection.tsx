import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getCollectionByUserName, newUser } from '../apis/api'
import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'
import { Collection } from '../../models/Ducks'
import { Link, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { duckCollected } from '../../server/db/Functions/function'
import { useState } from 'react'

const UserCollection = () => {
  const { user, isAuthenticated } = useAuth0()
  const username = user?.nickname as string
  const [userName, setUserName] = useState('Duck-O')

  const queryClient = useQueryClient()

  const userMutation = useMutation({
    mutationFn: newUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Collection'] })
    },
  })

  const {
    data: Ducks,
    isLoading,
    error,
  } = useQuery<[Collection]>({
    queryKey: ['Collection', username],
    queryFn: () => getCollectionByUserName(username),
    enabled: isAuthenticated,
  })

  console.log(Ducks)

  if (isLoading || !Ducks) {
    return (
      <Center>
        <Heading fontFamily="shadows into  light">Loading...</Heading>
      </Center>
    )
  }

  if (error) {
    return (
      <Center>
        <Heading fontFamily="shadows into  light">An error occurred...</Heading>
      </Center>
    )
  }
  console.log('Ducks2:', Ducks)
  console.log(userName)
  console.log(username)
  console.log(isAuthenticated)

  if (Ducks.length <= 1) {
    if (userName !== username) {
      setUserName(username)
      console.log('userName', userName)
      userMutation.mutate(username)

      console.log('userMutation')
    }
  }

  return (
    <div>
      <Container marginTop="25px" minH="100vh">
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={3}>
            <Center>
              <Heading
                fontFamily="shadows into  light"
                size="3xl"
                marginTop="20px"
                marginBottom="40px"
              >
                Duck Collection
              </Heading>
            </Center>
          </GridItem>

          <GridItem colSpan={3}>
            <Box
              bg="#044c34"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="2xl"
                fontWeight="bold"
              >
                Common
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Collection) =>
              Duck.rarity == 1 && Duck.timesCollected > 0 ? (
                <GridItem key={Duck.id} colSpan={1} margin="0 10px 20px 10px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/ducks/${Duck.id}`}>
                      <Card borderColor="#044c34" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      {Duck.timesCollected}
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}

          <GridItem colSpan={3}>
            <Box
              bg="#472273"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="2xl"
                fontWeight="bold"
              >
                Rare
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Collection) =>
              Duck.rarity == 2 && Duck.timesCollected > 0 ? (
                <GridItem key={Duck.id} colSpan={1} margin="0 10px 20px 10px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/ducks/${Duck.id}`}>
                      <Card borderColor="#472273" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      {Duck.timesCollected}
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}

          <GridItem colSpan={3}>
            <Box
              bg="#fcc200"
              w="100%"
              p={4}
              color="white"
              marginBottom="10px"
              borderRadius="5px"
            >
              <Text
                textAlign="center"
                fontFamily="shadows into  light"
                fontSize="2xl"
                fontWeight="bold"
              >
                Legendary
              </Text>
            </Box>
          </GridItem>

          {Ducks ? (
            Ducks.map((Duck: Collection) =>
              Duck.rarity == 3 && Duck.timesCollected > 0 ? (
                <GridItem key={Duck.id} colSpan={1} margin="0 10px 20px 10px">
                  <Grid templateColumns="repeat(3, 1fr)">
                    <Link to={`/ducks/${Duck.id}`}>
                      <Card borderColor="#fcc200" borderWidth="1px">
                        {/* <CardBody> */}
                        <Image src={Duck.image} alt={Duck.name}></Image>
                        {/* </CardBody> */}
                      </Card>
                    </Link>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily="shadows into  light"
                      margin="auto auto auto auto"
                    >
                      {Duck.timesCollected}
                    </Text>
                  </Grid>
                </GridItem>
              ) : null
            )
          ) : (
            <p>No Ducks available</p>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default UserCollection
