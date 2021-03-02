import React from 'react';
import GitHub from '../../assets/Images/GitHub.png'
import LinkedIn from '../../assets/Images/LinkedIn.png';
import './LeftColumn.css'

/**
 * This component represents the social media icons
 */
const SocialMedia = (props) =>(
    <div>
        <a href="https://github.com/dheerajdhall27" target="_blank"><img src={GitHub} className="social"/></a>
        <a href="https://www.linkedin.com/in/dheerajdhall/" target="_blank"><img src={LinkedIn} className="linkedin social"/></a>
    </div>
);


export default SocialMedia;