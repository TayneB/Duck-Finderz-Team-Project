import { useQuery } from '@tanstack/react-query'
import { getDuckById, getDuck } from '../apis/api'
import { useParams, Link } from 'react-router-dom'
import { Duck } from '../../models/Ducks'
import {
  Heading,
  Container,
  Card,
  Image,
  Text,
  Grid,
  GridItem,
  Button,
  Center,
} from '@chakra-ui/react'

export default function SingleDuck() {
  // const queryClient = useQueryClient()
  const { id } = useParams()
  // const duckId = Number(id)

  const {
    data: duck,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['duck', id],
    queryFn: () => getDuckById(id as unknown as number),
  })

  const { data: ducks } = useQuery<Duck[]>({
    queryKey: ['Ducks'],
    queryFn: () => getDuck(),
  })

  if (isError) {
    return (
      <Center>
        <Heading fontFamily="shadows into  light">An error occurred...</Heading>
      </Center>
    )
  }

  if (!duck || isLoading) {
    return (
      <Center>
        <Heading fontFamily="shadows into  light">Loading...</Heading>
      </Center>
    )
  }

  return (
    <>
      <Container>
        <Container marginTop="25px" border="1px" borderRadius="lg">
          <Heading
            fontFamily="shadows into  light"
            size="3xl"
            marginTop="30px"
            marginBottom="10px"
            textAlign="center"
          >
            {duck.name}
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" margin="30px 30px 20px 30px">
            <GridItem alignContent="center">
              <Card
                borderColor="black"
                borderWidth="1px"
                width="200px"
                height="200px"
              >
                {/* <CardBody> */}
                <Image src={duck.image} alt={duck.name}></Image>
                {/* </CardBody> */}
              </Card>
            </GridItem>
            <GridItem marginTop="75px">
              {duck.rarity == 1 ? (
                <Text fontSize="xl">Rarity: Common</Text>
              ) : duck.rarity == 2 ? (
                <Text fontSize="xl">Rarity: Rare</Text>
              ) : duck.rarity == 3 ? (
                <Text fontSize="xl">Rarity: Legendary</Text>
              ) : null}
              <Text fontSize="xl">Creator: {duck.creator}</Text>
            </GridItem>
          </Grid>
          <Text margin="30px 30px 50px 30px">{duck.backstory}</Text>
        </Container>

        <Container margin="50px 0 0 0">
          <Heading
            fontFamily="shadows into  light"
            size="xl"
            marginTop="10px"
            marginBottom="10px"
            textAlign="center"
          >
            Other ducks
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)">
            {ducks?.map((d) =>
              d.id !== duck.id ? (
                <GridItem
                  key={d.id}
                  alignContent="center"
                  margin="10px auto 10px auto"
                >
                  <Link to={`/ducks/${d.id}`}>
                    <Card
                      borderColor="black"
                      borderWidth="1px"
                      width="70px"
                      height="70px"
                    >
                      <Image src={d.image} alt={d.name}></Image>
                    </Card>
                  </Link>
                </GridItem>
              ) : null
            )}
          </Grid>
        </Container>
      </Container>
    </>
  )
}
