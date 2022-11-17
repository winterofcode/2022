import React from 'react'
import "./Loading.css"
import { Box } from '@chakra-ui/react'
const Loading = () => {
     return (
          <>

               <Box className="container">
                    <Box className="glitch" data-text="WOC">WOC</Box>
                    <Box className="glow">W O C</Box>
                    <p className="subtitle">WINTER OF CODE</p>
               </Box>
               <Box className="scanlines"></Box>

          </>
     )
}

export default Loading