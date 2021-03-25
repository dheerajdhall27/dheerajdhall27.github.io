import React from 'react';
import './About.css';
import Introduction from './Introduction';
import Project from './Project';


/**
 * This component is mainly for description
 */
const About = () => {
    return(
        <div className="about">
            <Introduction/>
            <Project/>
        </div>
    );
}

export default About;