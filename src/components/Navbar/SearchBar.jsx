import { Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = () => {
  return (
    <>
      <InputGroup justifySelf='center' width={{lg: '300px', md: '400px'}} borderRadius={5} size="md">
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch color="#ACB75A" />
        </InputLeftElement>
        <Input type="text" placeholder="Buscar..." border='1px solid white' background={"white"}  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button bg='#ACB75A' color='white' style={{bg: 'white' }}          
          _hover={{ bg: '#ACB75A' , border: 'none' }} 
          _active={{ bg: '#ACB75A', border: 'none'}} 
          size="md" 
          borderLeftRadius={0} 
          borderRightRadius={3.3} 
          border='1px solid white'>
            Buscar
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};

export default SearchBar