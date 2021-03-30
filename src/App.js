import Layout from "./components/Layout/Layout";
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageContainer from "./containers/PageContainer";
import SortingContainer from "./containers/sorting_visualizer/SortingContainer";

/**
 * This is starting of the application that calls the Layout component
 * to render everything required
 */
function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
