import React, {useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CircleStarFull, StarFull, StarEmpty, CircleStarEmpty } from "../icon/icon";
import { Heading, Box, Flex, Text } from '@chakra-ui/react';

export default function Timeline() {

    const [state, setState] = useState({
        mobileView: false,
      });

    const timelineCardData = [
        {
            id : 1,
            bgIconColor : "#EA4335",
            dateVal : "10th November, 2022",
            title : "Project Application Starts",
            description : "Within this period various organisations submit their project proposal."
        },
        {
            id : 2,
            bgIconColor : "#FBBC05",
            dateVal : "23rd November, 2022",
            title : "Organisations Announced",
            description : "The Organisations selected for the event will be announced."
        },
        {
            id : 3,
            bgIconColor : "#4285F4",
            dateVal : "25th November - 12th December, 2022",
            title : "Student Application Starts",
            description : "Students select their organisations and apply to them during this period."
        },
        {
            id : 4,
            bgIconColor : "#34A853",
            dateVal : "14th December, 2022",
            title : "Students announced, projects matched by organisations",
            description : "Students receive an email regarding their selection and are assigned projects by their respective organisation."
        },
        {
            id : 5,
            bgIconColor : "#EA4335",
            dateVal : "14th December - 16th December, 2022",
            title : "Community Bonding period",
            description : "Students come to know of their respective Organisations. Mentors are assigned. Strategies and approaches towards their project are discussed over platforms like slack."
        },
        {
            id : 6,
            bgIconColor : "#FBBC05",
            dateVal : "16th December - 29th December, 2022",
            title : "Phase 1",
            description : "The First round of tasks are handed out regarding the projects."
        },
        {
            id : 7,
            bgIconColor : "#4285F4",
            dateVal : "30th December - 31st December, 2022",
            title : "First Evaluation",
            description : "The process of students is assessed."
        },
        {
            id : 8,
            bgIconColor : "#34A853",
            dateVal : "1st January - 11th January, 2022",
            title : "Phase 2",
            description : "Second round of tasks is assigned."
        },
        {
            id : 9,
            bgIconColor : "#EA4335",
            dateVal : "12th January - 13th January, 2022",
            title : "Second Evaluation",
            description : "Final evaluation is done based on the outcome of the assigned tasks."
        },
        {
            id : 10,
            bgIconColor : "#FBBC05",
            dateVal : "20th January, 2022",
            title : "Successful Students Announced",
            description : "Name of students who have successfully completed the event will be announced."
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
            <Heading fontSize="3xl" justify="center" align="center" fontFamily="sans-serif" mb="2rem">
                <Text color="white" textAlign="center" fontSize={40}>Timeline</Text>
            </Heading>
            
        <VerticalTimeline lineColor='black' layout='2-columns' >
            {timelineCardData.map(cardItem =>{
                return (
                    <VerticalTimelineElement 
                    key={cardItem.id}
                    className="vertical-timeline-element--education"
                    contentStyle={{ borderTop: `5px solid ${cardItem.bgIconColor}`, color: 'black' }}    // dont delete this, will be needed to update.
                    contentArrowStyle={{ borderRight: `7px solid  ${cardItem.bgIconColor}` }}  // dont delete this, will be needed to update.
                    date={cardItem.dateVal}
                    iconStyle={{ background: `${cardItem.bgIconColor}`, color: '#fff' }}
                    icon={<StarFull/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{fontSize : "1rem", fontWeight: "bold"}}>{cardItem.title}</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                    <p>
                    {cardItem.description}
                    </p>
                </VerticalTimelineElement>
                )
            })}
             <VerticalTimelineElement
                iconStyle={{ background: '#4285F4', color: '#fff' }}
                date="Completion of WOC'22"
                icon={<CircleStarFull/>}
            />
        </VerticalTimeline>
    </Box>
   
    );
    };

    const displayMobile = () => {
    return (
        <Box>
             <Heading fontSize="3xl" justify="center" align="center" fontFamily="sans-serif" mb="2rem">
                <h1 align="center" color='black'>Timeline</h1>
           
            </Heading>
            <VerticalTimeline lineColor='black'>
            {timelineCardData.map(cardItem =>{
                return (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ borderTop: `5px solid ${cardItem.bgIconColor}`, color: 'black' }}    // dont delete this, will be needed to update.
                    contentArrowStyle={{ borderRight: `7px solid  ${cardItem.bgIconColor}` }}  // dont delete this, will be needed to update.
                    date={cardItem.dateVal}
                    iconStyle={{ background: `${cardItem.bgIconColor}`, color: '#fff' }}
                    icon={<StarFull/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{fontSize : "1rem", fontWeight: "bold"}}>{cardItem.title}</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                    <p>
                    {cardItem.description}
                    </p>
                </VerticalTimelineElement>
                )
            })}
             <VerticalTimelineElement
                iconStyle={{ background: '#4285F4', color: '#fff' }}
                date="Completion of WOC'22"
                icon={<CircleStarFull/>}
            />
        </VerticalTimeline>
    </Box>
    );
    };

    return (
        <Flex id="timeline" justify="center" align="center">
            {mobileView ? displayMobile() : displayDesktop()}  
        </Flex>
    )
}