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
    const layer2=useRef();
    const layer3=useRef();
    const layer4=useRef();
    const layer5=useRef();
    const layer6=useRef();
    const title=useRef()

    // function sp() {
    //     console.log("hit")
    //     document.querySelectorAll("div.parallax__layer").forEach((shift, i) => {
    //         console.log(i)
    //         console.log(shift)
    //         const x = (6 - i) / 2;
    //         shift.style.transform = `translateZ(-100*${x}px) scale(${x}+1)`
    //     })
    // }
    useEffect(() => {
        document.onmousemove = function (e) {
            if (window.innerWidth > 700) {
                // console.log(e.clientX, window.innerWidth);
                const centre=window.innerWidth/2;
                const move1=(centre-e.clientX)/25
                const move2=(centre-e.clientX)/19
                const move3=(centre-e.clientX)/18
                const move4=(centre-e.clientX)/17
                const move5=(centre-e.clientX)/14
                const move6=(centre-e.clientX)/12
                const tmove=-1 * move5
                // const title=(centre-e.clientX)/6
                layer1.current.style.left=move1+"px"
                layer2.current.style.left=move2+"px"
                layer3.current.style.left=move3+"px"
                layer4.current.style.left=move4+30+"px"
                layer5.current.style.left=move5+"px"
                layer6.current.style.left=move6+"px"
                title.current.style.right=tmove+"px"
            }
        }
        // obj.addEventListener("scroll", sp)
    })

    return (
        <div className="home">
            <div className="parallax">
                <h1 className="title" ref={title}>
                    Winter of code
                </h1>
                <button className="registration-btn">Register Now</button>
                <div ref={layer1} className="parallax__layer parallax__layer__0">
                    <img src={layer_0} />
                </div>
                <div className="parallax__layer parallax__layer__1" ref={layer1}>
                    <img src={layer_1}
                    />
                </div>
                <div className="parallax__layer parallax__layer__2" ref={layer2}>
                    <img src={layer_2} />
                </div>
                <div className="parallax__layer parallax__layer__3" ref={layer3}>
                    <img src={layer_3} />
                </div>
                <div className="parallax__layer parallax__layer__4" ref={layer4}>
                    <img src={layer_4} />
                </div>
                <div className="parallax__layer parallax__layer__5" ref={layer5}>
                    <img src={layer_5} />
                </div>
                <div className="parallax__layer parallax__layer__6" ref={layer6}>
                    <img src={layer_6} />
                </div>
                <div className="parallax__cover">
                    ergerth
                </div>
            </div>
        </div>
    )
}

export default Home
