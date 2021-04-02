import React from 'react';
import GitHub from '../../assets/Images/GitHub.png'
import LinkedIn from '../../assets/Images/LinkedIn.png';
import Twitter from '../../assets/Images/Twitter.png';
import Fcc from '../../assets/Images/Fcc.png';
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK, FCC_LINK } from '../../common/Constants';
import './MainHeader.css'

/**
 * This component represents the social media icons
 */
const SocialMedia = () =>(
    <div className="social">
        <a href={GITHUB_LINK} target="_blank" rel="noreferrer"><img src={GitHub} className="github" alt="Github"/></a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer"><img src={LinkedIn} className="linkedin" alt="LinkedIn"/></a>
        <a href={TWITTER_LINK} target="_blank" rel="noreferrer"><img src={Twitter} className="twitter" alt="Twitter"/></a>
        <a href={FCC_LINK} target="_blank" rel="noreferrer"><img src={Fcc} className="fcc" alt="FreeCodeCamp"/></a>
    </div>
);


export default SocialMedia;