import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {

    const project_data = [
        {
            Heading: "Sorting Visualizer",
            Description: "An application to provide a graphical representation of Sorting algorithms",
            Stack: ["React"],
            Link: "https://github.com/dheerajdhall27/sorting_visualized_react_frontend"
        },
        {
            Heading: "Online Whiteboard",
            Description: "A networked whiteboard application for collaboration",
            Stack: ["C++", "SFML"],
            Link: "https://github.com/dheerajdhall27/online_whiteboard"
        },
        {
            Heading: "Image Processing",
            Description: "An image processing application to apply transformations to images",
            Stack: ["Java"],
            Link: "https://github.com/dheerajdhall27/ImageProcessing"
        }
    ]

    return(
        <div>
            <p className="projects-heading">PROJECTS</p>
            <div className="project">
                {
                    project_data.map((project, index) => {
                        return <ProjectCard key={index}
                                            Heading={project.Heading}
                                            Description={project.Description}
                                            Stack={project.Stack}
                                            Link={project.Link}/>
                    })
                }
            </div>
        </div>
    );
}

export default Project;