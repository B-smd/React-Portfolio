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
                        <img src="img/design.JPG" alt="Web Developer" width="1200" height="700"/>
                        <div className="carousel-caption">
                            <h3>Web Developer</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/design1.jpg" alt="Web Designer" width="1200" height="700"/>
                        <div className="carousel-caption">
                            <h3>Web Designer</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/design2.JPG" alt="Designer" width="1200" height="700"/>
                        <div className="carousel-caption">
                            <h3>Designer</h3>
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
