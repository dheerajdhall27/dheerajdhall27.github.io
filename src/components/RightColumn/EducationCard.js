import React from 'react';
import './Education.css'

const EducationCard = (props) => {
    return(
        <div className="education-card">
            <p className="university-name">{props.university_name}</p>
            <p className="college-name">{props.college_name}</p>
            <p className="candidate-desc">{props.desc}</p>
        </div>
    );
}

export default EducationCard;