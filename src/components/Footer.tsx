import {
    Box,
    Center,
    Container,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  
  export default function SmallCentered() {
    return (
      
      <Box
        position={"fixed"}
        width={"85vw"}
        bottom={0}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
  
        <Box
          borderTopWidth={0}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            maxW={'1xl'}
            py={4}
          >
            <Text align={'Center'}>© 2024 Tiago Lopes. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    );
  }
  