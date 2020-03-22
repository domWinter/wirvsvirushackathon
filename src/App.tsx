import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainRoute from './components/MainRoute';
import HospitalRoute from './components/HospitalRoute';
import MapRoute from './components/MapRoute';

type AppProps = {
  className?: string
}

const App = ({ className } : AppProps) => {
  return (
    <div className={className}>
      <Router>
        <Switch>
          <Route path='/hospital/:id'>
            <HospitalRoute />
          </Route>
          <Route path='/map'>
            <MapRoute date={Date.now()/1000}/>
          </Route>
          <Route path='/'>
            <MainRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
