import React from 'react'
import { Flex, Text, Stack, Heading, IconButton, Box } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { ScaleFade } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';
import { data } from '../data/data'
import "../styles/teambg.css"
import ImageLoad from "../components/ImageLoad"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Team = () => {
    return (
        <>
            <Navbar />
            <Box className='teams-container'>
                <Bg />
                <Heading p='50px' pt="120px" fontSize='5xl' color='white' zIndex={1} pos="relative" textAlign='center'>Our Team</Heading>
                <Flex width='95%' maxWidth='1100px' wrap='wrap' margin='auto' justifyContent='center' gap='30px'>
                    <Cards />
                </Flex>
            </Box>
            <Footer />
        </>
    )
}

const Bg = ()=>{
    return(
        <div className="container">
            <div className="bubbles">
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"10"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"16"}}></span>
                <span style={{"--i":"19"}}></span>
                <span style={{"--i":"20"}}></span>
                <span style={{"--i":"22"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
                <span style={{"--i":"15"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"26"}}></span>
                <span style={{"--i":"17"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"10"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"16"}}></span>
                <span style={{"--i":"19"}}></span>
                <span style={{"--i":"20"}}></span>
                <span style={{"--i":"22"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
                <span style={{"--i":"15"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"10"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"16"}}></span>
                <span style={{"--i":"19"}}></span>
                <span style={{"--i":"20"}}></span>
                <span style={{"--i":"22"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
                <span style={{"--i":"15"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"26"}}></span>
                <span style={{"--i":"17"}}></span>
                <span style={{"--i":"13"}}></span>
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"11"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"24"}}></span>
                <span style={{"--i":"12"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"14"}}></span>
                <span style={{"--i":"23"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"25"}}></span>
                <span style={{"--i":"18"}}></span>
                <span style={{"--i":"21"}}></span>
            </div>
        </div>
    )
}

const Cards = ()=>{
    return (
        <>
            {
                data.map((items, index)=>{
                    const {name, desg, img, socialL} = items;
                    return(
                        <ScaleFade initialScale={0.9} in={true}>
                            <Stack marginBottom='1'>
                                <Flex className='floating' gap={{base: "10px", sm:"0"}} boxShadow='2xl' p='6' roundedRight={index%2===0 ? '2xl': '0'} roundedLeft={index%2!==0 ? '2xl': '0'} bg='whiteAlpha.100' width={{base: '85vw', sm: '450px'}} alignItems='center' direction={{base: 'column', sm: index%2!==0?'row' : 'row-reverse'}} justifyContent='space-between' my='5' backdropFilter='blur(10px)'>
                                    <ImageLoad src={ img } boxSize={{base: "120px", md: "170px"}} objectFit="cover" alt='user' borderRadius='full' transition='all 0.3s' />
                                    <Flex direction="column" alignItems={{base: "center", sm: "initial"}} paddingLeft={{base: "0", sm: "6"}} width='60%'>
                                        <Text textAlign={{base: "center", sm: "left"}} fontSize='2xl'>{name}</Text>
                                        <br />
                                        <Text fontSize='17px'>{desg}</Text>
                                        <br />
                                        <Flex gap='10px'>
                                        {
                                            socialL.map((items)=>{
                                                const {isPres, Slink} = items;
                                                if (isPres === 'GIT'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton aria-label='Github Link' fontSize='25px' variant='outline' colorScheme="purple" border="none" icon={<FaGithub />} />
                                                        </Link>
                                                    )
                                                } else if (isPres === 'LINKEDIN'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton aria-label='LinkedIn Link' fontSize='25px' variant='outline' colorScheme="teal" border="none" icon={<FaLinkedin />} />
                                                        </Link>
                                                    )
                                                } else if (isPres === 'TWIT'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton aria-label='Twitter Link' fontSize='25px' variant='outline' colorScheme="twitter" border="none" icon={<FaTwitter />} />
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Stack>
                        </ScaleFade>
                    )
                })
            }
        </> 
    )
}

export default Team
