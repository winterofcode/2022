import { Box, Text } from "@chakra-ui/react";
import React from "react";
import programbg from "../../assets/programbg.webp";

const Program = () => {
  return (
    <Box
      bgImage={`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${programbg})`}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition='center'
      bgColor="rgba(22, 22, 22, 0.589)"
      bgBlendMode={'overlay'}
      color="white"
      display="flex"
      flexDir={{base: 'column-reverse', md: 'row' , lg: 'row'}}      
      alignContent='center'
      alignItems={'center'} 
      justifyContent='center'
    >
    
      <Box
        m={7}        
        p={5}
        px={8}        
        maxW={'1100px'}
        backdropFilter={"saturate(230%) blur(8px)"}
        bg="rgba(22, 22, 22, 0.589)"
        borderRadius='25px'
        overflow='hidden'
      >        
        <Text fontSize={{base: "35px", md: "50px"}} as="b">
          About The Program
        </Text>
        <br />
        <Text fontSize={{base: "18px", md: "20px"}} as="b" color="gray.200">
          Winter of Code is a program aimed to increase participation for the
          Google Summer of Code program among students in colleges and
          universities.
        </Text>
        <br /> <br />
        <Text as="b" color="gray.300">
          Winter of Code is here to light up your winter spirits with the wide
          world of open source development. This initiative aims to prepare you
          for the grand Google Summer of Code. Join us for a month-long
          programming project with an open-source organisation.
          <br /> <br />
          As a part of the Winter of Code, students are paired with mentors from
          the participating organisation. This initiative aims at developing
          your skills in real-world software development in a wide range of
          specializations. In turn, the participating organisation gets to know
          your potential and also gives you the correct exposure that you need
          in your formative years. Above all, we hope you get encouraged into
          the world of open source and develop more code for the benefit of all.
        </Text>
      </Box>
    </Box>
  );
};

export default Program;
