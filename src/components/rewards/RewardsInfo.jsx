import React, { useState, useEffect } from "react";
import googledevelopers from "./Google Developers.svg";
import exclusiverewards from "./exclusiveschwags.png";
import { Box, Grid, GridItem, Flex, Image } from "@chakra-ui/react";



const Rewards2022 = () => {

  const [state, setState] = useState({
    mobileView: false,
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
        <Grid >
          {RewardsData.map(reward => (
            <GridItem key={reward.id} xs={12} md={6} lg={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Flex className="tilt-box-wrap" mb="0.5rem">
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <Flex className="tilt-box" justify="center" align="center" p="5%" >
                  <Image src={reward.image} width="100%" display="flex" justifyContent="center" alignItems="center" margin="0 auto"
                    alt={reward.name} borderLeft="3px solid #4285F4" borderRight="3px solid #EA4335" borderTop="3px solid #FBBC05" borderBottom="3px solid #34A853" borderRadius="0.5rem" p="1rem"  />
                  {/* <Typography>
                <p className={titleText}>{reward.name}</p>
                </Typography> */}
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
        {/* <Box>
                <h2 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h2>
              </Box> */}
      </Box>

    )
  }

  const displayMobile = () => {

    return (
      <Box>
        <Grid>
          {RewardsData.map(reward => (
            <GridItem key={reward.id} xs={12} md={12} lg={12} mt="1rem" mb="0.5rem">
              <Image src={reward.image} width="50%" margin="0 auto" display="flex" justify="center" align="center" padding="5%"
                alt={reward.name} borderLeft="3px solid #4285F4" borderRight="3px solid #EA4335" borderTop="3px solid #FBBC05" borderBottom="3px solid #34A853" borderRadius="0.5rem" />
              {/* <h1 className={titleTextMobile}>{reward.name}</h1> */}
            </GridItem>
          ))}
        </Grid>
        <br /><br />
        {/* <Box>
              <h3 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h3>
          </Box> */}
      </Box>
    )
  }
  return (

    <Flex justify="center" align="center">
      {mobileView ? displayMobile() : displayDesktop()}
    </Flex>
  );
};

export default Rewards2022;

const RewardsData = [
  {
    id: 1,
    name: "Google Developers",
    image: googledevelopers,
    classes: "",
  },
  {
    id: 2,
    name: "Winter of Code rewards",
    image: exclusiverewards,
    classes: "",
  }
]
