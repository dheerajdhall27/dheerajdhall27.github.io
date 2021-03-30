import React from 'react';
import Profile from '../../assets/Images/Profile.jpg'

const About = () => {

    return(
        <div className="about">
            <img src={Profile} className="profile-image"/>
            <div className="introduction">
                <p>Hello! My name is <b>Dheeraj Dhall</b></p>
                <p>A computer science graduate student at Northeastern University.</p>
                <p className="biryani">Biryani is life!</p> 
            </div>
        </div>
    );
}


export default About;