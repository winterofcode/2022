import React from 'react'
import { Flex, Text, Stack, Heading, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { ScaleFade } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';
import { data } from './data/data'
import "./data/teambg.css"
import ImageLoad from "../components/ImageLoad"

const Team = () => {
    return (
        <>
            <Bg />
            <Heading p='50px' fontSize='5xl' color='white' textAlign='center'>Our Team</Heading>
            <Flex width='95%' maxWidth='1100px' wrap='wrap' margin='auto' justifyContent='center' gap='30px'>
                <Cards />
            </Flex>
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
                                        <Text textAlign={{base: "center", sm: "left"}} fontSize='3xl'>{name}</Text>
                                        <br />
                                        <Text fontSize='xl'>{desg}</Text>
                                        <br />
                                        <Flex gap='10px'>
                                        {
                                            socialL.map((items)=>{
                                                const {isPres, Slink} = items;
                                                if (isPres === 'GIT'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton aria-label='Search database' icon={<FaGithub />} />
                                                        </Link>
                                                    )
                                                } else if (isPres === 'LINKEDIN'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton aria-label='Search database' icon={<FaLinkedin />} />
                                                        </Link>
                                                    )
                                                } else if (isPres === 'TWIT'){
                                                    return(
                                                        <Link href={Slink} isExternal>
                                                            <IconButton bgGradient='linear(white.100 0%, grey.100 25%, black.100 50%)' aria-label='Search database' icon={<FaTwitter />} />
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
