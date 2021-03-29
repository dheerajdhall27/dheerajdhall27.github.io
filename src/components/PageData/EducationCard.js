import React from 'react';
import './Education.css'

const EducationCard = (props) => {
    return(
        <div className="education-card">
            <div className="university-header">
                <p className="university-header-text">{props.university_name}</p>
            </div>
            <div className="university-body">
                <p>{props.college_name}</p>
            </div>
            <div className="university-footer">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default EducationCard;