import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1 style={{ color: "dodgerblue"}}>BAMBANG</h1>
            <nav>
                <h2 id="menulink"><a href="#navlinks">Menu</a></h2>
                <ul className="displayed" id="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="aboutme">About me</Link>
                    <Link to="projects">Portfolio</Link>
                    <Link to="resume">Resume</Link>
                    <Link to="contact">Contact me</Link>
                </ul>
            </nav>
    </header>
    );
}
      
