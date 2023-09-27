import { Box, Button, Container, Flex, Heading, Input, InputGroup, Stack, Text } from '@chakra-ui/react'

export const Pie = () => {
  return (
    <Box bgColor='#ACB75A'>
    <Container maxW='1305px' py={{base: 9, lg: '70px'}} px={{base: 6, sm: 12}}>
      <Flex direction={{base: 'column', lg: 'row'}} alignItems='center' justifyContent='space-between' gap={10}>
        <Stack gap='12px' width='100%'>
          <Heading size='lg' color='gray.200'>Ubicación</Heading>
          <Text fontSize='lg' color='gray.200'>Nos encontramos en Calle 7 n183 Navarro BsAs. Argentina</Text>
        </Stack>
      </Flex>
    </Container>
  </Box>
  )
}
