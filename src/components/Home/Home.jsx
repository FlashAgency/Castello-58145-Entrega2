import { Box } from '@chakra-ui/react'
import { Hero } from './Hero'
import { Categoria } from './Categoria'
import { Pie } from './Pie'

export const Home = () => {
  return (
    <Box>
      <Hero />
      <Categoria/>
      <Pie/>
    </Box>
  )
}
