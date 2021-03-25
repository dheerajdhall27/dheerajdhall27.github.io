import {React, useState} from 'react';
import './NavigatorTabs.css';

/**
 * This represents a container for the Right column which provides
 * states for the navigation of the columns associated with the profile
 * 
 * Reference: Self Teach Me - https://www.youtube.com/channel/UChoskCVZiIDTKxusGPPhLOg
 */
const NavigatorTabs = ({children}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleTabClick = (e, tabLabel) => {
        e.preventDefault();
        setActiveTab(tabLabel);
    }

    return(
        <div>
            <ul className="tabs">
                {
                    children.map((child, index) => { 
                        return <li key={index} className={activeTab === child.props.label ? "current label" : "label"}>
                                    <a href="#" onClick={(e) => handleTabClick(e, child.props.label)}>{child.props.label}</a>
                                </li>
                    })
                }
            </ul>
            {
                children.map((child, index) => {
                    if(child.props.label === activeTab) {
                        return <div key={index}>{child.props.children}</div>;
                    }
                })
            }
        </div>
    );
};


export default NavigatorTabs;