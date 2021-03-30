import React from 'react';
import './MainHeader.css';
import {useHistory} from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    
    const handleClick = () => {
        history.push("/");
    }

    return (
        <div className="header">
            <p className="name" onClick={() => handleClick()}>Dheeraj Dhall</p>
        </div>
    );
}

export default Header;