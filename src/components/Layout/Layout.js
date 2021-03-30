import React from 'react';
import PageContainer from '../../containers/PageContainer';
import SortingContainer from '../../containers/sorting_visualizer/SortingContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Navbar/Header';


/**
 * This represents the layout of the site.
 * Currently chosen to be a two column layout.
 */
const Layout = () => {
    return (
        <div>
            <Router>
                <Switch>
                
                <Route exact path="/">
                    <PageContainer/>
                </Route>

                <Route exact path = "/sorting_visualizer">
                    <div className="sorting-layout">
                        <Header/>
                        <SortingContainer/>
                    </div>
                </Route>
                
                </Switch>
            </Router>
        </div>
    );
}


export default Layout;