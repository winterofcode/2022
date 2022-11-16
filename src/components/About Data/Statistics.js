import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Statistics = () => {
  return (
    <Box      
      className='parallax'
      bgColor='rgba(0,0,0,0.7)'
      bgBlendMode={"overlay"}      
      display="flex"
      flexDir={{base: 'column', md: 'row' , lg: 'row'}}
      alignItems="center"
      justifyContent="space-evenly"
      color='white'
      
    >
      <Box
        p={5}
        pb={3}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <i className="fa-solid fa-user fa-3x"></i>
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
        <i className="fa-solid fa-building fa-3x"></i>
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
        <i className="fa-solid fa-user-tie fa-3x"></i>        
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
