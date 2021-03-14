import React from 'react';
import NavigatorTabs from '../../containers/NavigatorTabs';
import About from './About';
import Education from './Education';

const TabsConsolidator = () => {

    return(
        <NavigatorTabs>
            <div label="About"><About/></div>
            <div label= "Education"><Education/></div>
        </NavigatorTabs>
    );
}


export default TabsConsolidator;