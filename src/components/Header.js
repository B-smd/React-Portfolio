import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1 style={{ color: "dodgerblue"}}>BAMBANG</h1>
            <nav>
                <ul className="displayed" id="navlinks">
                    <Link to="/React-Portfolio">Home</Link>
                    <Link to="aboutme">About me</Link>
                    <Link to="projects">Portfolio</Link>
                    <Link to="resume">Resume</Link>
                    <Link to="contact">Contact me</Link>
                </ul>
            </nav>
    </header>
    );
}
      
