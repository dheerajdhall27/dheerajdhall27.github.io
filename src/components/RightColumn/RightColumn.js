import React from 'react';
import NavigatorTabs from '../../containers/NavigatorTabs';
import "../Layout/Layout.css"

/**
 * This represents the Right column in this two column layout
 * The intention is to populate this based on the navigation chosen
 */
const RightColumn = () => (
    <div className="column right">
        <NavigatorTabs/>
    </div>
);

export default RightColumn;