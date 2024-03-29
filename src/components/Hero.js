import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
import { DiHtml5, DiCss3, DiJavascript, DiJqueryLogo, DiBootstrap, DiNodejs, DiMysql, DiReact, DiMongodb } from 'react-icons/di';

const Hero = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div id="hero">
               <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00FFFF",
          },
          links: {
            color: "#FFB6C1",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
            <div className="content text-center">
                <h2 style={{ color: "cyan"}}>Welcome</h2>
                <h6 style= {{color: "dodgerblue"}}>I am a Web Developer and Graphic Designer</h6>
                <h5 style= {{color: "dodgerblue"}}>SKILLS :</h5>
                <h3>< DiHtml5/>< DiCss3 />< DiJavascript />< DiJqueryLogo />< DiBootstrap />< DiNodejs />< DiMysql />< DiReact />< DiMongodb /></h3>
            </div>
            <Link to="/aboutme"><p><img src={`${process.env.PUBLIC_URL}/img/bs.jpeg`} alt="Bambang"/></p></Link>
  
        </div>
    )
}

export default Hero