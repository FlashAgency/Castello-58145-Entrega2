import { Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import collares from '../../assets/collares.jpg'
import aros from '../../assets/aros.jpg'
import pulseras from '../../assets/pulseras.jpg'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Categoria = () => {
  return (
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Heading width='100%' textAlign='center' size='xl' color='gray.700' pb='12'>Productos</Heading>
        <SimpleGrid rowGap='12' templateColumns={{base: 'repeat(2, auto)' , md: 'repeat(3, auto)'}} justifyContent={{base: 'space-around', lg: 'space-between'}}>
        <ChakraLink as={ReactRouterLink} reloadDocument to='/category/pulseras'>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='white'  src={pulseras} />
              <Text fontSize={{base: 'lg' ,lg: '3xl'}}>Pulseras</Text>
            </Stack>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/aros'>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='white'  src={aros} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Aros</Text>
            </Stack>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} reloadDocument to='/category/collares'>
            <Stack maxW='200px' align='center'>
              <Image borderRadius='full' boxSize={{base: '150px', lg: '200px'}} border='1px' borderColor='white'  src={collares} />
              <Text fontSize={{base: 'lg' ,lg: '2xl'}}>Collares</Text>
            </Stack>
            </ChakraLink>
        
        </SimpleGrid>
    </Container>
  )
}
