import React from "react";

function ProjectCard(props) {
    return (
        <div className="card bg-success">
        <div className="card-body text-center">
            <a 
                className="card-text text-white" 
                href={props.github}
            >{props.name}</a>
        </div>
      </div>
    );
}

export default ProjectCard;