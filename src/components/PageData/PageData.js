import React from 'react';
import "../Layout/Layout.css"
import TabsConsolidator from './TabsConsolidator';

/**
 * This represents the Right column in this two column layout
 * The intention is to populate this based on the navigation chosen
 */
const PageData = () => (
    <div className="bar page">
        <TabsConsolidator/>
    </div>
);

export default PageData;