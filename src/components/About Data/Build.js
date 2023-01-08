import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import students from "../../assets/motive_students.png";
import organisations from "../../assets/motive_organisations.png";
import mentors from "../../assets/motive_mentor.png";

const Build = () => {
  return (
    <Box bg="#012325" color="white">
      <Box p={{base: 2, md:10}} m={10} mt={0} textAlign={"center"} color="white">
        <Box>
          <Text fontSize="3xl" fontWeight={600}>
            Let's Build Something Awesome Together
          </Text>
        </Box>
        <br />

        <Text fontSize={"20px"}>
          Developer Students Club of NSEC brings to you Winter of Code which is
          a month-long extravaganza of Open Source contribution, bringing
          together students, organisations and mentors to build amazing projects
          together. Here is what the program has to offer for students,
          organisations, and mentors.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        bg="linear-gradient(180deg, rgba(8, 140, 127, 0.9) 0%, rgba(1, 35, 37, 0.9) 100%)"
        borderRadius={"29px"}
        textAlign="justify"
      >
        <Box p={5} m={7} mt={0}>
          <Box textAlign={"center"}>
            <Text fontSize="3xl" as="b">
              Students
            </Text>
            <br />
            <Image src={students} marg margin="auto" in="auto" />
          </Box>
          <Text fontSize={"16px"}>
            Students who are interested can register for the Winter of Code by
            filling a form. Students who are selected will work with mentors of
            the organisation that they are accepted for. If accepted, students
            amalgamate with their organisations prior to the start of coding and
            learn more about their organisation’s community. Students then have
            one month to code and meet the deadlines agreed upon with their
            mentors. On successful completion of the program students will be
            rewarded with some cool schwags.
          </Text>
          <br />
        </Box>

        <Box p={5} m={7} mt={0}>
          <Box textAlign={"center"}>
            <Text fontSize="3xl" as="b">
              Organisations
            </Text>
            <br />
            <Image src={organisations} margin="auto" />
          </Box>
          <Text fontSize={"16px"}>
            Open source organisations can apply to be mentor organisations. Once
            accepted, organisations discuss possible ideas with students and
            then decide on the proposals they wish to mentor for the winter.
            They provide feedback to help guide each student through the
            program. Mentors and students work together to determine appropriate
            milestones and requirements for the winter. Mentor interaction is a
            vital part of the program.
          </Text>
          <br />
        </Box>

        <Box p={5} m={7} mt={0}>
          <Box textAlign={"center"}>
            <Text fontSize="3xl" as="b">
              Mentors
            </Text>
            <br />
            <Image src={mentors} margin="auto" />
          </Box>
          <Text fontSize={"16px"}>
            Mentors guide the students throughout their projects and review
            their code samples multiple times. They provide valuable feedback
            and suggest possible improvements to the code. They also determine
            if a student has successfully completed the Winter of code 2020
            project. Students are then notified of the pass/fail status and
            schwags are delivered accordingly.
          </Text>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Build;
