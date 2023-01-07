import React from "react";
import "../styles/newhome.css"
import ltree from "../assets/ltree.webp"
import rtree from "../assets/ritree.webp"
import ltree_2 from "../assets/ltree-2.webp"
import rtree_2 from "../assets/rtree-2.webp"
const NewHome=()=>{
    return(
        <div className="nhome">
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
    )
}
export default NewHome;