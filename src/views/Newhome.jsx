import React from "react";
import "../styles/newhome.css"
import ltree from "../assets/ltree.webp"
import rtree from "../assets/ritree.webp"
import ltree_2 from "../assets/ltree-2.webp"
import rtree_2 from "../assets/rtree-2.webp"
import Snowfall from 'react-snowfall'
import About from "../components/About";
import Apply from "../components/Apply";
import Faq from "../components/Faq";
import Card from "../components/Card";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const NewHome=()=>{
    return(
      <>
        <div className="nhome">
            <Snowfall
            speed={[2.0,5.0]}
            snowflakeCount={150}
            wind={[1,7]}
            />
            <div className="slide-down">Winter</div>
            <div className="slide-lr">
                <span className="slide-l">of </span>
                <span className="slide-r">code</span>
                </div>
                <div className="reg-btn">
                <button className="wreg">Register Now</button>
                </div>
            
                <div className="ltree-2">
                    <img src={ltree_2} alt="" />
                </div>
                <div className="ltree">
                    <img src={ltree} alt="" />
                </div>
                <div className="rtree-2">
                    <img src={rtree_2} alt="" />
                </div>
                <div className="rtree">
                    <img src={rtree} alt="" />
                </div>
            </div>
            <About />
            <Apply />
            <Card />
            <Timeline />
            <Faq />
            <Footer />
        </>
    )
}
export default NewHome;