import React, { userState } from "react";

import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects.json"





const Projects = () => {
    const [projects, setProjects] = userState([])
    setProjects(projectData)

    console.log(projects)
    return "est"
    // return (
    //     {projects.map( project => (
    //         <ProjectCard
    //             name={project.name}
    //             github={project.github}
    //         />
    //     ))}
    // );
}

export default Projects




// class Projects extends Component {
//     state = {
//         projects
//     }

//     render() {
//         return (
//             {this.state.projects.map( project => {
//                 <ProjectCard
//                     name={project.name}
//                     github={project.github}
//                 />
//             })}
//         );
//     }
// }