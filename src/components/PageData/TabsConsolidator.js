import React from 'react';
import NavigatorTabs from '../../containers/NavigatorTabs';
import About from './About';
import Education from './Education';
import Project from './Project';
import WorkExperience from './WorkExperience';

const TabsConsolidator = () => {

    return(
        <div>
            <About/>
            <div label="Projects"><Project/></div>
            <div label="Education"><Education/></div>
            <div label="Work"><WorkExperience/></div>
        </div>
    );
}


export default TabsConsolidator;