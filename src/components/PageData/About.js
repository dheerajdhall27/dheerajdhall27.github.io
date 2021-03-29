import React from 'react';
import Profile from '../../assets/Images/Profile.jpg'
import './About.css';

const About = () => {

    return(
        <div className="about">
            <img src={Profile} className="profile-image"/>
            <div className="introduction">
                <p>Hello! My name is <b>Dheeraj Dhall</b></p>
                <p>A computer science gaduate student at Northeastern University.</p>
                <p className="biryani">Biryani is life!</p> 
            </div>
        </div>
    );
}


export default About;