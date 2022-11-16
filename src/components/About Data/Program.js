import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Program = () => {
  return (
    <Box
      bgImage="linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(https://media.giphy.com/media/paYbRu5nLkosE/giphy.gif)"
      display="flex"
      color="white"
    >
      <Box p={5} width="75%" m={7}>
        <Text fontSize="5xl" as="b">
          About The Program
        </Text>
        <br />
        <Text fontSize="2xl" as="b" color="gray.300">
          Winter of Code is a program aimed to increase participation for the
          Google Summer of Code program among students in colleges and
          universities.
        </Text>
        <br /> <br />
        <Text as="b" color="gray.500">
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
      <Image
        src={require("./programbg.png")}
        width={{ base: "30%", lg: "28%" }}
        opacity={"0.8"}
      />
    </Box>
  );
};

export default Program;
