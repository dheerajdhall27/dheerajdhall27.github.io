import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css'

const Project = (props) => {
    
    const project_data = [
        {
            Heading: "Sorting Visualizer",
            Description: "An application to provide a graphical representation of Sorting algorithms",
            Stack: ["React"],
            Link: "https://github.com/dheerajdhall27/sorting_visualized_react_frontend",
            GitHub: 'true',
            Interactable:'true'
        },
        {
            Heading: "Online Whiteboard",
            Description: "A networked whiteboard application for collaboration",
            Stack: ["C++", "SFML"],
            Link: "https://github.com/dheerajdhall27/online_whiteboard",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Image Processing",
            Description: "An image processing application to apply transformations to images",
            Stack: ["Java"],
            Link: "https://github.com/dheerajdhall27/ImageProcessing",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Course Editor React",
            Description: "An application for teachers to add course information",
            Stack: ["React", "HTML", "JavaScript", "Bootstrap", "CSS"],
            Link: "https://github.com/dheerajdhall27/learning_management_system_react",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Course Editor",
            Description: "Server for an application for teachers to add course information",
            Stack: ["Java", "SpringBoot", "HTML", "Bootstrap", "CSS"],
            Link: "https://github.com/dheerajdhall27/learning_management_system_java",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Winstagram - Frontend",
            Description: "A clone of Instagram that allows user to upload images and apply filters",
            Stack: ["React-Redux", "Bootstrap", "CSS", "HTML"],
            Link: "https://github.com/dheerajdhall27/winstagram_frontend_react",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Winstagram - Backend",
            Description: "Backend for the Winstagram application",
            Stack: ["Java", "SpringBoot", "MySQL", "AWS-S3"],
            Link: "https://github.com/dheerajdhall27/winstagram_backend_java",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Distributed K-means",
            Description: "A project to cluster regions in Chicago based on the crime rate",
            Stack: ["Scala", "Apache Spark", "AWS-S3"],
            Link: "https://github.com/dheerajdhall27/Kmeans",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "MapReduce and Spark Design Patterns",
            Description: "A collection of implementation of Distributed design patterns",
            Stack: ["Java", "Scala", "Apache Spark", "Hadoop MapReduce", "AWS-S3", "AWS-EMR"],
            Link: "https://github.com/dheerajdhall27/Kmeans",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "Advent Of Code 2020",
            Description: "An attempt at solving Advent Of Code 2020",
            Stack: ["Ruby"],
            Link: "https://github.com/dheerajdhall27/advent_of_code_2020",
            GitHub: 'true',
            Interactable:'false'
        },
        {
            Heading: "A collection of Code Pens",
            Description: "A bunch of projects I worked on during the 100 days of code challenge",
            Stack: ["React", "Redux", "HTML", "JavaScript", "D3.js", "Bootstrap"],
            Link: "https://codepen.io/dheerajdhall",
            GitHub: 'false',
            Interactable:'false'
        },
    ]

    return(
        <div>
            <p className="project-start">Projects</p>
            <div className="project">
                {
                    project_data.map((project, index) => {
                        return <ProjectCard key={index}
                                            Heading={project.Heading}
                                            Description={project.Description}
                                            Stack={project.Stack}
                                            Link={project.Link}
                                            GitHub={project.GitHub}
                                            Interactable={project.Interactable}
                                            />
                    })
                }
            </div>
        </div>
    );
}

export default Project;