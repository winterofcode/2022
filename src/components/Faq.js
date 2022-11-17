import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
import data from "./Faq Data/faqData";

const faq = () => {
  return (
    <div id="faqs">
      <Container
        my={5}
        maxW="container.sm"
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDir="column"
        justifyContent="center"
      >
        <Box position="relative">
          <Text
            as="b"
            fontSize="6xl"
            textAlign="center"
            position="absolute"
            left="150px"
            top="25px"
          >
            FAQs
          </Text>
          <Image src={require("../assets/head.png")} width="400px" />
        </Box>
        <Box mt={3}>
          {data.map((faqs) => (
            <Accordion
              allowMultiple
              key={faqs.slno}
              textAlign="left"
              bg="#54555c"
              _hover={{ bg: "#c8c9d6", color: "#36363a" }}
              color="white"
              my={2}
              borderRadius={"25px"}
              borderColor="white"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {faqs.ques}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bg="#898a9b"
                  color="white"
                  borderRadius={"25px"}
                >
                  {faqs.ans}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default faq;
