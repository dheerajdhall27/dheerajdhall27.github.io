import React from 'react';
import MainHeaderContent from './MainHeaderContent';
import "../Layout/Layout.css"


/**
 * This component represents the Left column in the site layout
 * It consists of the Profile information and a navigator for the
 * website.
 */
const MainHeader = (props) => (
    <div className="bar">
        <MainHeaderContent/>
    </div>
);


export default MainHeader;