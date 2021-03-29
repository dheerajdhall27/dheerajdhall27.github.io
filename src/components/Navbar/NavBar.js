import React from 'react';
import Profile from './Profile';
import Navigator from './Navigator';
import "../Layout/Layout.css"


/**
 * This component represents the Left column in the site layout
 * It consists of the Profile information and a navigator for the
 * website.
 */
const NavBar = (props) => (
    <div className="bar">
        <Profile/>
    </div>
);


export default NavBar;