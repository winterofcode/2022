import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Image,
  HStack,
  Flex
} from '@chakra-ui/react';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../assets/org-logo.png";
import trans from "../assets/transparent.svg";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

export default function Footer() {
  return (
    <Box
      bg={'#171923'}
      color={'#E2E8F0'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          columns={{ sm: '1', md: '3' }}
          spacing={8}>
          <Stack spacing={6}>
            <HStack >
              <Image src={logo} height={45} width={45}></Image>
              <Text
                fontSize={'20.8px'}
                fontWeight={700}>
                    Winter of Code
              </Text>
            </HStack>
            <Text fontSize={'sm'} color={'rgb(160 160 160)'}>
            The Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/winterofcode/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'https://www.facebook.com/winterofcode/'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/winterofcode/'}>
                <FaTwitter />
              </SocialButton>
            </Stack>
            <Text fontSize={'sm'} color={'rgb(160 160 160)'}>
                © Winter of Code 2022
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://intro2ml.dscnsec.com/'} color={'rgb(160 160 160)'} fontSize={'15px'}>Intro to ML</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://logo-generator.dscnsec.com/'} color={'rgb(160 160 160)'} fontSize={'15px'}>Logo Generator</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://go.dscnsec.com/'} color={'rgb(160 160 160)'} fontSize={'15px'}>DSC NSEC Go</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://www.youtube.com/playlist?list=PLLGfrNGZ7g4MzarnbBN-DC_AGErhYMC2s'} color={'rgb(160 160 160)'} fontSize={'15px'}>Full Stack Projects</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://gcp2021.dscnsec.com/'} color={'rgb(160 160 160)'} fontSize={'15px'}>30 Days of Google Cloud</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>DSC NSEC Handles</ListHeader>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://www.instagram.com/dscnsec/'} color={'rgb(160 160 160)'} fontSize={'15px'}>Instagram</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://twitter.com/dscnsec'} color={'rgb(160 160 160)'} fontSize={'15px'}>Twitter</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://t.me/dscnsec'} color={'rgb(160 160 160)'} fontSize={'15px'}>Telegram</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://www.youtube.com/channel/UCKKrqXvTWZm0tULPxqv1NPg'} color={'rgb(160 160 160)'} fontSize={'15px'}>Youtube</Link>
            <Link _hover={{
              textDecoration: 'none',
              color: '#6188ff',
            }} href={'https://www.facebook.com/dscnsec/'} color={'rgb(160 160 160)'} fontSize={'15px'}>Facebook</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={8}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
          }}>
          <Image borderRadius={'full'} src={trans} height={100} width={100}></Image>
        </Flex>
        <Text fontSize={'sm'} textAlign={'center'} color={'#0F9D58'}>
            Made with 💜 by Web Team
        </Text>
        <Text pt={1} fontSize={'sm'} textAlign={'center'} color={'rgb(160 160 160)'}>
          © 2022 DSC NSEC. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}