import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import cards from '../data/card-data'
import "../styles/Card.css"

function Card() {
    return (
        <>
            <Box className='App' m={10}>
                {
                    cards.map((x) => {
                        return (
                            <Box className='card-body'>
                                <Box className="card-logo">
                                    <img src={x.src} alt="" />
                                </Box>
                                <Box className="card-title">
                                    {x.title}
                                </Box>
                                <Box className="number_of_projects">
                                    {x.no_of_projects}
                                </Box>

                                <Button colorScheme='blue' className='view-project'>View projects</Button>
                            </Box>
                        )
                    })
                }
            </Box>


        </>
    )
}

export default Card