import React from 'react';
import profile from '../../assets/Images/profile.jpg'
import SocialMedia from './SocialMedia';
import './LeftColumn.css'

/**
 * This represents the component for the Profile information
 * 1. Image
 * 2. Links to Social media
 * 3. Small Description
 */
const Profile = () => (
    <div className="profile">
        <img src={profile} className="profile-image"/>
        <p className="name">Dheeraj Dhall</p>
        <SocialMedia/>
    </div>
);

export default Profile;