import React, {useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CircleStarFull, StarFull, StarEmpty, CircleStarEmpty } from "../icon/icon";
import { Heading, Box, Flex, Text, VStack } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons'
import "../styles/Timeline.css"

export default function Timeline() {

    const [state, setState] = useState({
        mobileView: false,
      });

    const timelineCardData = [
        {
            id : 1,
            bgIconColor : "#EA4335",
            dateVal : "20th January, 2023",
            title : " First contact with Companies established",
            description : "Finishing off contact with organizations and communities involved."
        },
        {
            id : 2,
            bgIconColor : "#FBBC05",
            dateVal : "23th January, 2023",
            title : "Organisation Project registration starts",
            description : "Organisations will be able to register their project under WoC."
        },
        {
            id : 3,
            bgIconColor : "#34A853",
            dateVal : "12th February, 2023",
            title : "Finalizing Video promos, Proposals and Registrations for Organizations",
            description : "Video promos, proposals and registrations for Organizations will be finalized."
        },
        {
            id : 4,
            bgIconColor : "#EA4335",
            dateVal : "15th February, 2023",
            title : "Organization Registration ends",
            description : "Registration for projects under organisation ends."
        },
        {
            id : 5,
            bgIconColor : "#FBBC05",
            dateVal : "17th February, 2023",
            title : "Proposal submissions Start",
            description : "Students will be able to submit their proposals for the projects."
        },
        {
            id : 6,
            bgIconColor : "#4285F4",
            dateVal : "27th February, 2023",
            title : "Proposal submissions end and Screening starts",
            description : "Proposal submissions will be closed and the screening process will start."
        },
        {
            id : 7,
            bgIconColor : "#34A853",
            dateVal : "3rd March, 2023",
            title : "Students Announced",
            description : "Selected students will be announced to the projects."
        },
        {
            id : 8,
            bgIconColor : "#4285F4",
            dateVal : "6th March, 2023",
            title : "Student Contribution Starts",
            description : "Selected students will be starting to contribute to the assigned projects."
        },
        {
            id : 9,
            bgIconColor : "#EA4335",
            dateVal : "17th March, 2023",
            title : "Project evaluation",
            description : "Review of the students contribution will be shared by the organisations."
        },
        {
            id : 10,
            bgIconColor : "#FBBC05",
            dateVal : "28th March, 2023",
            title : "Project submission",
            description : "Students will be able to submit their projects."
        }

    ]
    
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
        <Box my="70px">
            <Heading justify="center" align="center" mb="2rem">
                <Text color="white" textAlign="center" fontSize="45px">Timeline</Text>
            </Heading>
            
        <VerticalTimeline lineColor='white' layout='2-columns'>
            {timelineCardData.map(cardItem =>{
                return (
                    <VerticalTimelineElement 
                    // style={{width:"1064px", height:"184px" , position : "relative", left: "53px"}}
                    key={cardItem.id}
                    className="vertical-timeline-element--education"
                    contentStyle={{ borderTop: `5px solid ${cardItem.bgIconColor}`, color: 'white' }}    // dont delete this, will be needed to update.
                    contentArrowStyle={{ borderRight: `7px solid  ${cardItem.bgIconColor}` }}  // dont delete this, will be needed to update.
                    date={cardItem.dateVal}
                    dateClassName="timeline-date-font"
                    iconStyle={{ background: `${cardItem.bgIconColor}`, color: '#fff' }}
                    icon={<StarFull/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{fontSize : "24px", fontWeight:"semibold" , color : "black"}}>{cardItem.title}</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                    <Text>
                    <h3 className="vertical-timeline-element-subtitle" style={{fontSize : "16px", fontWeight:"medium", color : "black"}}>{cardItem.description}</h3>
                    </Text>
                </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
        <Box display="flex" justifyContent="center">
            <VStack>
            <TriangleDownIcon boxSize={7} color="white" padding={0} margin={0}/>
            <Text fontWeight="semibold" fontSize="20px" color="rgba(255, 255, 255, 0.7)">Completion of WOC 2023</Text>
            </VStack>
        </Box>
    </Box>
   
    );
    };

    const displayMobile = () => {
    return (
        <Box>
             <Heading fontSize="35px" justify="center" align="center" mb="2rem">
                <Text color="white" align="center">
                <h1>Timeline</h1>
                </Text>
            </Heading>
            <VerticalTimeline lineColor='white'>
            {timelineCardData.map(cardItem =>{
                return (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ borderTop: `5px solid ${cardItem.bgIconColor}`, color: 'black' }}    // dont delete this, will be needed to update.
                    contentArrowStyle={{ borderRight: `7px solid  ${cardItem.bgIconColor}` }}  // dont delete this, will be needed to update.
                    date={cardItem.dateVal}
                    dateClassName="timeline-date-mobile-font"
                    iconStyle={{ background: `${cardItem.bgIconColor}`, color: '#fff' }}
                    icon={<StarFull/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{fontSize : "16px", fontWeight: "600"}}>{cardItem.title}</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                    <p style={{fontSize:"14px", fontWeight:"500"}}>
                    {cardItem.description}
                    </p>
                </VerticalTimelineElement>
                )
            })}
             <VerticalTimelineElement
                iconStyle={{ background: '#FBBC05', color: '#fff' }}
                contentStyle={{color : "white"}}
                dateClassName="timeline-date-mobile-font"
                date="Completion of WOC'23"
                icon={<CircleStarFull/>}
            />
        </VerticalTimeline>
    </Box>
    );
    };

    return (
        <Flex className="timeline-font" id="timeline" justify="center" align="center" backgroundColor="#012325">
            {mobileView ? displayMobile() : displayDesktop()}  
        </Flex>
    )
}