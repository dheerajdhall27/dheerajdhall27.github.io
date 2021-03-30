import React from 'react';
import GitHub from '../../assets/Images/GitHub.png'
import LinkedIn from '../../assets/Images/LinkedIn.png';
import Twitter from '../../assets/Images/Twitter.png';
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from '../../common/Constants';
import './MainHeader.css'

/**
 * This component represents the social media icons
 */
const SocialMedia = () =>(
    <div className="social">
        <a href={GITHUB_LINK} target="_blank"><img src={GitHub} className="github"/></a>
        <a href={LINKEDIN_LINK} target="_blank"><img src={LinkedIn} className="linkedin"/></a>
        <a href={TWITTER_LINK} target="_blank"><img src={Twitter} className="twitter"/></a>
    </div>
);


export default SocialMedia;