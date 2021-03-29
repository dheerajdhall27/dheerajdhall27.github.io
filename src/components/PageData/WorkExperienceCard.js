import React from 'react';
import './WorkExperience.css';

const WorkExperienceCard = (props) => {

    return(
        <div className="work-experience-card">
            <div className="work-experience-header">
                <p className="company">{props.Company}</p>
                <p className="title">{props.Title}</p>
            </div>
            <div className="work-experience-body">
                {props.Description}
            </div>
            <div className="work-experience-footer">
                {
                    props.Stack.map((tech, index) => {
                        return <p className="tech-pill" key={index}>{tech}</p>
                    })
                }
            </div>
        </div>
    );
}

export default WorkExperienceCard;