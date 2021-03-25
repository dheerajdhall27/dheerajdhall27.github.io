import React from 'react';
import GitHub from '../../assets/Images/GitHubBlack.png'
import './Project.css'

const ProjectCard = (props) => {
    return(
        <div className="project-card">
            <div className="header">
                <p>{props.Heading}</p>
            </div>
            <div className="project-body">
                <p className="project-description">{props.Description}</p>
            </div>
            <div className="project-footer">
                <div className="project-stack">
                    {
                        props.Stack.map((tech, index) => {
                            return <p className="tech-pill" key={index}>{tech}</p>
                        })
                    }
                </div>
                <div className="project-link">
                    <a href={props.Link} target="_blank"><img src={GitHub}/></a>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;