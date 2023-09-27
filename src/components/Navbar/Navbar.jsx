import { Container, Flex } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <Flex flexDirection='column' as='nav' p='' align='center' maxWidth='100%' justify='space-between'>
      <Container maxW='100%'>
        <Flex justify='space-between' align='center'>
          <NavLinks />
        </Flex>
      </Container>
    </Flex>
  );
}

export default NavBar;
