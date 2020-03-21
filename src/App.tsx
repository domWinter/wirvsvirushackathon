import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HospitalRoute from './components/HospitalRoute';
import HospitalsRoute from './components/HospitalsRoute';
import Map from './components/MapChart';

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
            <Map />
          </Route>
          <Route path='/'>
            <HospitalsRoute />
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
