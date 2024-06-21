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
            height={'900'}
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
                './public/Fafire.webp'
              }
            />
          </Box>
          </Stack>
        </Container>
      </>
    );
  }
  