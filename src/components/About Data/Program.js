import { Box, Text } from "@chakra-ui/react";
import React from "react";
import programbg from "../../assets/programbg.webp";

const Program = () => {
  return (
    <Box
      bgImage={`url(${programbg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="rgba(1, 35, 37, 0.9)"
      bgBlendMode={"overlay"}
      color="white"
      display="flex"
      flexDir={{ base: "column-reverse", md: "row", lg: "row" }}
      alignContent="center"
      alignItems={"center"}
      justifyContent="center"
      opacity={0.9}
      filter={"drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))"}
    >
      <Box
        mx={{base: 3, md:7}}
        my={14}
        py={10}
        px={{base: 6, md:16}}
        maxW={"1100px"}
        backdropFilter={"blur(50px) backdropSaturate(200%)"}
        bg="linear-gradient(180deg, rgba(8, 140, 127, 0.5) 0%, rgba(1, 35, 37, 0.5) 100%);"
        borderRadius="29px"
        opacity={0.9}
        overflow="hidden"
        textAlign={"center"}
        color="white"
      >
        <Text fontSize={{ base: "35px", md: "50px" }} as="b">
          About The Program
        </Text>
        <br />
        <Text fontSize={{ base: "18px", md: "24px" }} as="b">
          Winter of Code is a program aimed to increase participation for the
          Google Summer of Code program among students in colleges and
          universities.
        </Text>
        <br /> <br />
        <Text fontWeight={600}>
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
