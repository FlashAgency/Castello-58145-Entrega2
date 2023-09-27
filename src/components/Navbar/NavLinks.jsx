import { Link, List, ListItem, Text, Flex } from "@chakra-ui/react"
import NavProducts from "./NavProducts"

import CartWidget from './CartWidget';
import SearchBar from './SearchBar';

const NavLinks = () => {
  return(
    <>
      <List bg='#ACB75A' display ='flex' px='12px' py='10px' width='100%' alignItems='center' justifyContent='center' gap='40px'>
      <ListItem>
            
              <Text fontSize='xl' fontWeight='bold' as='p' color='white'>Guayaba /</Text>
          
        </ListItem>
        <ListItem>
            <Link href="/">
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Inicio</Text>
            </Link> 
        </ListItem>
        <ListItem>
          <NavProducts/>
        </ListItem>
        <ListItem>
            <Link>
              <Text fontSize='lg' fontWeight='semibold' as='p' color='white'>Nosotros</Text>
            </Link> 
        </ListItem>
     
      <Flex align='center'>
            <SearchBar />
            <CartWidget />
          </Flex>

          </List>
    </>
  )
}

export default NavLinks