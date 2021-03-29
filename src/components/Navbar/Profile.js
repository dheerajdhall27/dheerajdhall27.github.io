import React from 'react';
import SocialMedia from './SocialMedia';
import './NavBar.css'

/**
 * This represents the component for the Profile information
 * 1. Image
 * 2. Links to Social media
 * 3. Small Description
 */
const Profile = () => (
    <div className="profile">
        <p className="name">Dheeraj Dhall</p>
        <SocialMedia/>
    </div>
);

export default Profile;