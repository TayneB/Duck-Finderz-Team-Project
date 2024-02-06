import { Link } from 'react-router-dom'
import {
  Card,
  Image,
  Grid,
  GridItem,
  Text,
  Center,
  Heading,
  Container,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { Duck } from '../../models/Ducks'
import { getDuck } from '../apis/api'

export default function Ducks() {
  const {
    data: ducks,
    isLoading,
    error,
  } = useQuery<Duck[]>({ queryKey: ['Ducks'], queryFn: () => getDuck() })

  if (!ducks || isLoading) {
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
  return (
    <>
      <Container minH="100vh" minW={{ base: '50vh', lg: '100vh' }}>
        <Grid
          templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
        >
          {ducks.map((d) => (
            <GridItem
              alignContent="center"
              margin="20px 20px 20px 20px"
              key={d.id}
              width="130px"
              height="130px"
            >
              <Text fontWeight="bold" textAlign="center">
                {d.name}
              </Text>
              <Link to={`/ducks/${d.id}`}>
                <Card borderColor="#044c34" borderWidth="1px">
                  {/* <CardBody> */}
                  <Image
                    src={d.image}
                    alt={d.name}
                    width="100%"
                    height="100%"
                  ></Image>
                  {/* </CardBody> */}
                </Card>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  )
}
