import React from "react";
import videoBg from "../assets/videoBg.mp4"

const Hero = () => {
    return (
        <div id="hero">
            <video src={videoBg} autoPlay loop muted/>
            <div className="content text-center">
                <h2 style={{ color: "violet"}}>Welcome</h2>
                <h6 style= {{color: "aqua"}}>I am a Web Developer and Graphic Designer</h6>
            </div>
            <p><img src={`${process.env.PUBLIC_URL}/img/bs.jpeg`} alt="Bambang"/></p>
        </div>
    )
}

export default Hero