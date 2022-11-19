import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Text,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logo from '../assets/org-logo.png';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'gray.900'} px={{base: '4', md: '20'}} pos='sticky' top={'0'} backdropFilter='auto' zIndex={100}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack>
              <Image src={logo} h={'45'} w={'45'}></Image>
              <Link fontSize={'28px'} fontWeight={'700'} color='white' style={{ textDecoration: 'none' }} href='/'>Winter of Code</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
                <Link
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
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='https://winterofcode.com/organisers'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  Team
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='#organizations'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  Organizations
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='#faq'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  FAQ
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='#contact'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    bg: '#4285F4',
                  }}>
                  Contact Us
                </Link>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <Link
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
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='https://winterofcode.com/organisers'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Team
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='#organizations'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Organizations
                </Link>
                <Link
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
                </Link>
                <Link
                  px={2}
                  py={1}
                  href='#contact'
                  fontWeight={'500'}
                  rounded={'md'}
                  color='white'
                  _hover={{
                    textDecoration: 'none',
                    color: '#4285F4',
                  }}>
                  Contact Us
                </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Stack spacing={100}>
      </Stack>
    </>
  );
}