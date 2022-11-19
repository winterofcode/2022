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
} from "@chakra-ui/react";
import data from "./Faq Data/faqData";

const faq = () => {
  return (
    <div id="faqs">
      <Container        
        maxW="container.sm"
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDir="column"
        justifyContent="center"
      >
        <Box >
          <Text
            as="b"
            fontSize="6xl"
            textAlign="center"
            color={'white'}
          >
            FAQs
          </Text>
        </Box>
        <Box my={5} >
          {data.map((faqs) => (
            <Accordion
              allowMultiple
              key={faqs.slno}
              textAlign="left"
              bg="#4444af"
              _hover={{ bg: "#3c3cfa" }}
              color="white"
              my={2}
              
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
                  bg="#6262f0"
                  color="white"
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
