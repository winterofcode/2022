import { useEffect, useRef } from "react"
import { Image, Box } from "@chakra-ui/react"

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
        <Image ref={dummy} src="https://i.ibb.co/hVBWGzF/default-dp.webp" {...rest}/>

      </Box>
    );
  }