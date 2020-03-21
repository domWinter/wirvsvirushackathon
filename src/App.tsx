import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';

import {
  Hospital as HospitalI,
  Repository as RepositoryI
} from './types';

import HospitalList from './components/HospitalList';
import HospitalRoute from './components/HospitalRoute';
import Client from './client/client';

type AppProps = {
  className?: string
}

const App = ({ className } : AppProps) => {
  const [hospitals, setHospitals] = useState<HospitalI[] | undefined>()
  useEffect(() => {
    const client : RepositoryI = new Client();
    client.getHospitals()
    .then(setHospitals)
    .catch((error) => console.log("Cannot fetch hospitals"));
  }, []);

  return (
    <div className={className}>
      <Router>
        <Switch>
          <Route path='/hospital/:hospitalId'>
            <HospitalRoute />
          </Route>
          <Route path='/'>
            {hospitals && <HospitalList hospitals={hospitals}/>}
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
