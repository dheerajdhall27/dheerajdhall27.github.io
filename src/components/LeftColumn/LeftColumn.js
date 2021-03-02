import React from 'react';
import Profile from './Profile';
import Navigator from './Navigator';
import "../Layout/Layout.css"


/**
 * This component represents the Left column in the site layout
 * It consists of the Profile information and a navigator for the
 * website.
 */
const LeftColumn = (props) => (
    <div className="column left">
        <Profile/>
        <Navigator/>
    </div>
);


export default LeftColumn;