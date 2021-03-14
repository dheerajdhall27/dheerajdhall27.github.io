import React from 'react';
import GitHub from '../../assets/Images/GitHub.png'
import LinkedIn from '../../assets/Images/LinkedIn.png';
import { GITHUB_LINK, LINKEDIN_LINK } from '../../common/Constants';
import './LeftColumn.css'

/**
 * This component represents the social media icons
 */
const SocialMedia = () =>(
    <div>
        <a href={GITHUB_LINK} target="_blank"><img src={GitHub}/></a>
        <a href={LINKEDIN_LINK} target="_blank"><img src={LinkedIn} className="linkedin"/></a>
    </div>
);


export default SocialMedia;