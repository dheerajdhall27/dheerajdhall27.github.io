import React from 'react';
import NavBar from '../Navbar/NavBar';
import PageData from '../PageData/PageData';

/**
 * This represents the layout of the site.
 * Currently chosen to be a two column layout.
 */
const Layout = (props) => (
    <div>
        <NavBar/>
        <PageData/>
    </div>
);


export default Layout;