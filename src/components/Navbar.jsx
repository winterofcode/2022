import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Text,
  Collapse,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logo from '../assets/org-logo.png';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'transparent'} bgColor={'#2f8075'} boxShadow={'2xl'} px={{base: '4', md: '20'}} pos='fixed' backdropFilter='auto' zIndex={1000} w={'100vw'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack>
              <Image src={logo} h={'45'} w={'45'}></Image>
              <ChakraLink fontSize={'28px'} fontWeight={'700'} color='white' style={{ textDecoration: 'none' }} href='/'>Winter of Code</ChakraLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={7}
              display={{ base: 'none', lg: 'flex' }}>
                <ChakraLink
                  px={2}
                  py={1}
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
                  href='/#organizations'
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
                  href='/#faq'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  FAQ
                </ChakraLink>
                <ChakraLink
                  px={2}
                  py={1}
                  href='#'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  Contact Us
                </ChakraLink>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
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
                  px={2}
                  py={1}
                  href='#organisers'
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
                <ChakraLink
                  px={2}
                  py={1}
                  href='#'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Contact Us
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