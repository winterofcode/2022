import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import cards from '../data/card-data'
import "../styles/Card.css"
import orgLogo2 from "../assets/orgLogo2.png"


function Card() {
    return (
        <>
            <Box className='App' m={10}>
                <Box className='card-wrapper'
                    __css={{
                        width: '100%',
                        minHeight: 'auto',

                        maxHeight: 'auto',
                        backgroundColor: '#1F3E5A',


                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',

                        gap: '10px',
                    }}>
                    {
                        cards.map((x) => {
                            return (
                                <Box className='card-body' __css={{
                                    width: '300px',
                                    height: '300px',
                                    backgroundImage: orgLogo2,
                                    backgroundSize: '75% 75%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'fixed',
                                    backgroundPosition: 'center',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    backgroundColor: 'white',


                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    transition: '0.25s',
                                    flexShrink: '0',
                                    border: '1px solid black',
                                }}>
                                    <Box className="card-logo" __css={
                                        {
                                            position: 'relative',
                                            zIndex: '100',
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '20px !important',
                                            display: 'flrex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }
                                    }>
                                        <img src={x.src} alt="" />
                                    </Box>
                                    <Box __css={
                                        {
                                            position: 'relative',
                                            fontSize: '1.1em',
                                            fontWeight: '500',
                                            color: 'rgb(3, 3, 3)',
                                            margin: '7.5px',
                                        }
                                    } className="card-title">
                                        {x.title}
                                    </Box>
                                    <Box className="number_of_projects" __css={
                                        {
                                            position: 'relative',
                                            fontSize: '0.9em',
                                            fontWeight: '400',
                                            color: 'rgb(0, 0, 0)',
                                        }
                                    }>
                                        {x.no_of_projects}
                                    </Box>

                                    <Button colorScheme='blue' className='view-project' __css={
                                        {
                                            width: '180px',
                                            height: '44px',
                                            fontWeight: '500',
                                            fontSize: '20px',
                                            marginTop: '2.5%',
                                            border: '2px solid #1F3E5A !important',
                                            background: 'transparent !important',
                                            borderRadius: '5px',
                                            color: 'black !important',
                                        }
                                    }>View projects</Button>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>


        </>
    )
}

export default Card