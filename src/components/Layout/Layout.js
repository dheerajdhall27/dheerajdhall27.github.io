import React from 'react';
import LeftColumn from '../LeftColumn/LeftColumn';
import RightColumn from '../RightColumn/RightColumn';

/**
 * This represents the layout of the site.
 * Currently chosen to be a two column layout.
 */
const Layout = (props) => (
    <div>
        <LeftColumn/>
        <RightColumn/>
    </div>
);


export default Layout;