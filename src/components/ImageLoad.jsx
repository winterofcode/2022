import { useEffect, useRef } from "react"
import { Image, Box } from "@chakra-ui/react"
import defaultDp from "../assets/default_dp.webp"

export default function ImageLoad({src, ...rest}) {
    const image = useRef()
    const dummy = useRef()
    useEffect(() => {
      image.current.style.display = "none"
      image.current.onload = function() {
        console.log("image is loaded")
        dummy.current.style.display = "none"
        image.current.style.display = "block"
      };
      image.current.src = src
    }, [])
    return (
      <Box>
        <Image ref={image} {...rest} />
        <Image ref={dummy} src={defaultDp} {...rest}/>

      </Box>
    );
  }