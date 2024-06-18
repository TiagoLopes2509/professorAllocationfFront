import {
    Heading,
    Container,
    Text,
    Stack,
    Image,
    Box,
    IconButton,
  
  } from '@chakra-ui/react';

  interface HeroProps {
    description: string;
    subtitle: string;
    title: string;
  }
  
  export default function CallToActionWithAnnotation(props: HeroProps) {
    return (
      <>
        <Container maxW={'full'}>
          <Stack
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color={'green.400'}>
              {props.title} <br />
              <Text as={'span'} color={'black'}>
                {props.subtitle}
              </Text>
            </Heading>
            <Text color={'gray.500'}>
                {props.description}
            </Text>
            <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
          </Stack>
        </Container>
      </>
    );
  }
  