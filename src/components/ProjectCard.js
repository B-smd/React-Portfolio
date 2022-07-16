import React from "react";

function ProjectCard(props) {
    return (
        <div className="card">
            <img 
                src={props.image} 
                className="card-img-top" 
                alt="project screenshot"
            />
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <div className="card-body">
                    <a className="card-link" href={props.demo}>Demo</a>
                <div>
                    <a className="card-link" href={props.github}>GitHub</a>
                </div>    
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;