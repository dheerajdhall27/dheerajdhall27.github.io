import React from 'react';
import Education from '../components/RightColumn/Education';
import './NavigatorTabs.css';

/**
 * This represents a container for the Right column which provides
 * states for the navigation of the columns associated with the profile
 * 
 */
const NavigatorTabs = () => {

    return(
        <div>
            <ul className="tabs">
                <li >About</li>
                <li className="current">Education</li>
                <li>Projects</li>
            </ul>


            <div>
                <Education/>
            </div>
        </div>
    );
};


export default NavigatorTabs;