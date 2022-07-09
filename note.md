Header.js
import React from 'react';

export default function Header() {
    return (
        <header>
            <h1>PORTFOLIO</h1>
            <nav>
                <h2 id="menulink"><a href="#navlinks">Menu</a></h2>
                <ul className="displayed" id="navlinks">
                    <li><a href="index.html" className="thispage">Home</a></li>
                    <li><a href="design1.html">Design-1</a></li>
                    <li><a href="design2.html">Design-2</a></li>
                    <li><a href="design3.html">Design-3</a></li>
                    <li><a href="video.html">Video</a></li>
                </ul>
            </nav>
      </header>

Hero.js
import React from "react";

export default function Hero() {
    return (
        <div id="hero"> 
            <div id="demo" className="carousel slide" data-ride="carousel">
          
                {/* <!-- Indicator --> */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
            
                {/* <!-- The slidesshow--> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/design1.jpeg" alt="Round Architecture" width="1100" height="500"/>
                        <div className="carousel-caption">
                            <h3>Round Architecture</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/design3.jpeg" alt="Train Station" width="1100" height="500"/>
                        <div className="carousel-caption">
                            <h3>Train Station</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/design4.jpg" alt="Architecture Elements" width="1100" height="500"/>
                        <div className="carousel-caption">
                            <h3>Architecture Elements</h3>
                        </div>
                    </div>
                </div>
    
                {/* Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            <p><img src="img/bs.jpeg" alt="Bambang"/></p>
        </div>
    
    );
}

App.js
import Header from './components/Header';
import Hero from './components/Hero';
import Design1 from './components/Design1';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
