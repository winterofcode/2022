import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {FiUser} from 'react-icons/fi'
import {ImUserTie} from 'react-icons/im'
import {VscOrganization} from 'react-icons/vsc'

const Statistics = () => {
  return (
    <Box            
      bgColor='#088C7F'
      display="flex"
      flexDir={{base: 'column', md: 'row' , lg: 'row'}}
      alignItems="center"
      justifyContent="space-evenly"
      color='white'      
    >
      <Box
        px={5}
        py={10}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
      >        
        <FiUser size={'70px'} />
        <br />
        <Text as="b" fontSize="4xl">
          400+
        </Text>
        <Text  fontSize="3xl">
          Students
        </Text>
      </Box>
      <Box
        p={5}
        pb={3}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <VscOrganization size={'70px'} />
        <br />
        <Text as="b" fontSize="4xl">
          10+
        </Text>
        <Text fontSize="3xl">
          Organisations
        </Text>
      </Box>
      <Box
        p={5}
        pb={3}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <ImUserTie size={'70px'} />    
        <br />
        <Text as="b" fontSize="4xl">
          40+
        </Text>
        <Text fontSize="3xl">
          Mentors
        </Text>
      </Box>
    </Box>
  );
};

export default Statistics;
