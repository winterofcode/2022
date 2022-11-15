import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Statistics = () => {
  return (
    <Box      
      className='parallax'

      bgColor='rgba(0,0,0,0.6)'
      bgBlendMode={"overlay"}      
      display="flex"
      flexDir={{base: 'column', md: 'row' , lg: 'row'}}
      alignItems="center"
      justifyContent="space-evenly"
      color='white'
      style={{textShadow: "10px 7px 5px black"}}
    >
      <Box
        p={10}
        pb={5}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <i className="fa-solid fa-user fa-4x"></i>
        <br />
        <Text as="b" fontSize="5xl">
          400+
        </Text>
        <Text as="b" fontSize="3xl">
          Students
        </Text>
      </Box>
      <Box
        p={10}
        pb={5}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <i className="fa-solid fa-building fa-4x"></i>
        <br />
        <Text as="b" fontSize="5xl">
          10+
        </Text>
        <Text as="b" fontSize="3xl">
          Organisations
        </Text>
      </Box>
      <Box
        p={10}
        pb={5}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <i className="fa-solid fa-user-tie fa-4x"></i>        
        <br />
        <Text as="b" fontSize="5xl">
          40+
        </Text>
        <Text as="b" fontSize="3xl">
          Mentors
        </Text>
      </Box>
    </Box>
  );
};

export default Statistics;
