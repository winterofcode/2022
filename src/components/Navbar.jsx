import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
  Image
} from '@chakra-ui/react';
import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logo from '../assets/org-logo.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  
  useEffect(() => {
    location.pathname === "/" && isOpen ? setColor(true) : setColor(false)
  }, [isOpen])
  
  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener('scroll', changeColor);
    } else {
      setColor(true)
    }
    return () => window.removeEventListener("scroll", changeColor);
  }, [])

  return (
    <>
      <Box className={color ? 'Navbar-scrolled' : 'Navbar'} px={{base: '4', md: '20'}} pos='fixed' zIndex={1000} w={'100vw'}>
        <style>
          {`
            .Navbar {
              background-color: transparent !important;
            
                -webkit-transition: all ease-out .5s;
              -moz-transition: all ease-out .5s;
              -o-transition: all ease-out .5s;
              transition: all ease-out .5s;
            }
            .Navbar-scrolled {
              background-color: #057368b5 !important;
              backdrop-filter: blur(10px);
              // background-color: #057368 !important;

                -webkit-transition: all ease-out .3s;
              -moz-transition: all ease-out .3s;
              -o-transition: all ease-out .3s;
              transition: all ease-out .3s;
            }
          `}
        </style>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            color="white"
            border="1px solid white"
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg='transparent'
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack gap="6px">
              <Image src={logo} h={'45'} w={'45'}></Image>
              <ChakraLink fontSize={'20px'} fontWeight={'700'} color='white' style={{ textDecoration: 'none' }} href='/'>Winter of Code</ChakraLink>
            </HStack>
          </HStack>
          <Box h="40px" w="40px" display={{lg:"none"}}></Box>
          <Flex alignItems={'center'} display={{ base: 'none', lg: 'flex' }}>
            <HStack
              as={'nav'}
              spacing={7}
              display={{ base: 'none', lg: 'flex' }}>
                <ChakraLink
                  px={2}
                  py={1}
                  target="_blank"
                  href='https://dscnsec.com/'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  GDSC NSEC
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                    <Link to="/organisers">
                    Team
                    </Link>
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  href='/#/#organizations'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  Organizations
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  href='/#/#faq'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  FAQ
                </ChakraLink>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <ChakraLink
                  px={2}
                  py={1}
                  href='https://dscnsec.com/'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  GDSC NSEC
                </ChakraLink>
                <ChakraLink
                  href="/organisers"
                  px={2}
                  py={1}
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Team
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  href='/#organizations'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Organizations
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  href='#faq'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  FAQ
                </ChakraLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Stack spacing={100}>
      </Stack>
    </>
  );
}