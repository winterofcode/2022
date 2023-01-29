import React from 'react'
import "../styles/Apply.css"
import { Box, Heading, Text, Button, Link, Flex } from '@chakra-ui/react'

function Apply() {
    return (
        <>
            <Box className='apply-section' id="organizations">
                <Box className="apply-content" m={10}>
                    <Heading color='black'>Apply</Heading>
                    <Text className='text' lineHeight={2} mt={2} color='black'>Start your journey with Winter Of Code & be a part of our Open Source community.</Text>
                    
                    <Text lineHeight={2} mt={1} color='black' className='timeline-text-section text'><Text className='text'>Check the <span className='timeline'>Timeline</span> section.</Text> Applications will open on the mentioned date.</Text>

                    <Flex className='apply-btns' mt={4}>
                        <Link p="8px 20px" fontWeight={600} href='https://register.winterofcode.com/' target="_blank" color="white" colorScheme='twitter' ml={2} mt={2} className="apply-btn">APPLY AS ORGANISATION</Link>
                        <Button color="white" colorScheme='twitter' ml={2} mt={2} className="apply-btn">APPLY AS COMMUNITY PARTNER</Button>
                        <Button color="white" colorScheme='twitter'ml={2} mt={2} className="apply-btn">APPLY AS MENTOR</Button>
                        <Button color="white" colorScheme='twitter'ml={2} mt={2} className="apply-btn">APPLY AS STUDENT</Button>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Apply