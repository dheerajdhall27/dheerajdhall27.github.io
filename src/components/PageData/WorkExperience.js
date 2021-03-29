import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import './WorkExperience.css';

const WorkExperience = () => {
    const experience = [
        {
            Company: "Smartleaf Inc",
            Title: "Software Development Co-op",
            Description: "Smartleaf provides portfolio rebalancing as a service. I worked as a Full-Stack developer implementing improvements " +
                         "to the API endpoints, handling production releases and managing a cross-functional meeting to triage bugs.",
            Stack: ["Ruby", "Ruby on Rails", "React", "Oracle SQL"],
        },
        {
            Company: "Escapade Technologies",
            Title: "Lead Game Programmer",
            Description: "Worked as a lead progammer and built 3 mobile games using C# and Unity 3D",
            Stack: ["C#", "Unity3D"],
        },
        {
            Company: "Backstage Pass Institute of technology",
            Title: "Lecturer - Computer Science",
            Description: "Taught C# and game development concepts to undergraduate students.",
            Stack: ["C#", "Unity3D"],
        },
        {
            Company: "Purple Talk",
            Title: "Software Engineer",
            Description: "Developed a gamified new-parenting application called Grow. Handled UI transitions, Localization and Serialization.",
            Stack: ["C#", "Unity3D"],
        },
    ];

    return(
        <div>
            <p className="work-heading">Companies I have worked with</p>
            <div className="work-experience">
                {
                    experience.map((exp, index) => {
                        return <WorkExperienceCard key={index}
                                            Company={exp.Company}
                                            Title={exp.Title}
                                            Description={exp.Description}
                                            Stack={exp.Stack}/>
                    })
                }
            </div>
        </div>
    );
}

export default WorkExperience;  