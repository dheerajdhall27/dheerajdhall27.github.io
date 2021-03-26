import React from 'react';
import NavigatorTabs from '../../containers/NavigatorTabs';
import About from './About';
import Education from './Education';
import WorkExperience from './WorkExperience';

const TabsConsolidator = () => {

    return(
        <NavigatorTabs>
            <div label="About"><About/></div>
            <div label="Education"><Education/></div>
            <div label="Work"><WorkExperience/></div>
        </NavigatorTabs>
    );
}


export default TabsConsolidator;