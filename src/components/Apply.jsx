import React from 'react'
import "../styles/Apply.css"
import { Box, Heading, Text, Button } from '@chakra-ui/react'

function Apply() {
    return (
        <>
            <Box className='apply-section'>
                <Box className="apply-content" m={10}>
                    <Heading color='white'>Apply</Heading>
                    <Text className='text' lineHeight={2} mt={2} color='white'>Start your journey with Winter Of Code & be a part of our Open Source community.</Text>
                    
                    <Text lineHeight={2} mt={1} color='white' className='timeline-text-section text'><Text className='text'>Check the <span className='timeline'>Timeline</span> section.</Text> Applications will open on the mentioned date.</Text>

                    <Box className='apply-btns' mt={4}>
                        <Button colorScheme='twitter' ml={2} mt={2} className="apply-btn">APPLY AS ORGANISATION</Button>
                        <Button colorScheme='twitter'ml={2} mt={2} className="apply-btn">APPLY AS MENTOR</Button>
                        <Button colorScheme='twitter'ml={2} mt={2} className="apply-btn">APPLY AS STUDENT</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Apply