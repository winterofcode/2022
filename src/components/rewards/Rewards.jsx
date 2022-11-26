import React, {useState, useEffect} from 'react'
import Rewards2022 from "./RewardsInfo";
import { Box, Flex } from '@chakra-ui/react';

export default function Rewards() {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });
    
    const { mobileView } = state;

    useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
        window.removeEventListener("resize", () => setResponsiveness());
    };
    }, []);

    const displayDesktop = () => {
        return (
            <Box>
               <Box fontFamily="sans-serif" fontSize="1.3rem" color="#000813" fontWeight="bold" display="flex" justifyContent="center" alignItems="center">
                 <h2>Rewards for Successful Students</h2>
               </Box>
               <Rewards2022/>
            </Box>
        ) 
    }

    const displayMobile = () => {

        return(
            <Box>
            <Box fontFamily="sans-serif" fontSize="0.9rem" color="#000813" fontWeight="bold" display="flex" justifyContent="center" alignItems="center" width="100%" margin="0 auto">
              <h2>Rewards for Successful Students</h2>
            </Box>
            <Rewards2022/>
         </Box>
        )
    }

    return (

        <Flex background="none" minHeight="100vh" justifyContent="center" alignItems="center">
                {mobileView ? displayMobile() : displayDesktop()}  
        </Flex>
    )
}