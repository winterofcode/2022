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
    <div style={{backgroundColor: '#012325'}} id="faq">
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
              bg='#057368'
              _hover={{ bg: "#058578" }}
              color="white"
              my={4}
              borderTop= '3px solid #4285F4'
              boxShadow= '0px 4px 6px rgba(0, 0, 0, 0.37)'
              
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
                  bg="#06a090"
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
