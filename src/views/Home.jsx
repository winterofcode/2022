import React, { useEffect, useState, useRef } from 'react'
import "../styles/home.css"
import layer_0 from "../assets/layer_0.webp"
import layer_1 from "../assets/layer_1.webp"
import layer_2 from "../assets/layer_2.webp"
import layer_3 from "../assets/layer_3.webp"
import layer_4 from "../assets/layer_4.webp"
import layer_5 from "../assets/layer_5.webp"
import layer_6 from "../assets/layer_6.webp"
const Home = () => {

    const layer1 = useRef();

    function sp() {
        console.log("hit")
        document.querySelectorAll("div.parallax__layer").forEach((shift, i) => {
            console.log(i)
            console.log(shift)
            const x = (6 - i) / 2;
            shift.style.transform = `translateZ(-100*${x}px) scale(${x}+1)`
        })
    }
    useEffect(() => {
        const obj = document.querySelector(".parallax")
        console.log(obj)
        document.onmousemove = function (e) {
            console.log(e.clientX, window.innerWidth);
        }
        obj.addEventListener("scroll", sp)
    })

    return (
        <div className="home">
            <div className="parallax">
                <div ref={layer1} className="parallax__layer parallax__layer__0">
                    <img src={layer_0} />
                </div>
                <div className="parallax__layer parallax__layer__1">
                    <img src={layer_1}
                    />
                </div>
                <div className="parallax__layer parallax__layer__2">
                    <img src={layer_2} />
                </div>
                <div className="parallax__layer parallax__layer__3">
                    <img src={layer_3} />
                </div>
                <div className="parallax__layer parallax__layer__4">
                    <img src={layer_4} />
                </div>
                <div className="parallax__layer parallax__layer__5">
                    <h1 className="title">
                        Winter of code</h1>
                    <button className="registration-btn">Register Now</button>
                    <img src={layer_5} />
                </div>
                <div className="parallax__layer parallax__layer__6">
                    <img src={layer_6} />
                </div>
                <div className="parallax__cover"></div>
            </div>
        </div>
    )
}

export default Home
