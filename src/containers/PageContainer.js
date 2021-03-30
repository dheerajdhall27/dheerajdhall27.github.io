import React from 'react';
import "../components/Layout/Layout.css";
import '../components/PageData/About.css'
import About from '../components/PageData/About';
import Project from '../components/PageData/Project';
import Education from '../components/PageData/Education';
import WorkExperience from '../components/PageData/WorkExperience';
import MainHeader from '../components/Navbar/MainHeader';

/**
 * This represents the main content of the website
 */
const PageContainer = () => {
    
    return (
        <div className="bar page">
            <div>
                <MainHeader/>
                <About/>
                <div label="Projects"><Project/></div>
                <div label="Education"><Education/></div>
                <div label="Work"><WorkExperience/></div>
            </div>
        </div>
    )
}

export default PageContainer;