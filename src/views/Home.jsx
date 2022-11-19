import React from 'react'
import Apply from '../components/Apply'
import Card from '../components/Card'
import About from "../components/About";
import Faq from "../components/Faq";
import "../App.css"

const Home = () => {
    return (
        <>
            <About />
            <Apply />
            <Card />
            <Faq />
        </>
    )
}

export default Home;
