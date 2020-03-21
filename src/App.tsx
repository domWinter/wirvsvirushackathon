import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from './components/Hospital';
// TODO change to real repository
import styled from 'styled-components';

import {
  Hospital as HospitalI,
  Repository as RepositoryI
} from './types';

import HospitalList from './components/HospitalList';
import HospitalForm from './components/HospitalForm';
import Client from './client/client';
import { FormattedMessage } from "react-intl";

type AppProps = {
  className?: string
}

const client : RepositoryI = new Client();

const App = ({ className } : AppProps) => {
  const [hospitals, setHospitals] = useState<HospitalI[] | undefined>()
  useEffect(() => {
    client.getHospitals()
    .then(setHospitals)
    .catch((error) => console.log("Cannot fetch hospitals"));
  }, []);

  return (
    <div className={className}>
      <HospitalForm />
      <FormattedMessage
        id="app.greeting"
        description="Greeting to welcome the user to the app"
        defaultMessage="Hello, {name}!"
        values={{
          name: 'Alex',
        }}>
        {(txt) =>
          <p>{txt}</p>
        }
      </FormattedMessage>
      <Router>
        <Switch>
          <Route exact path='/'>
            {hospitals && <HospitalList hospitals={hospitals}/>}
          </Route>
          <Route path='/hospital'>
            <HospitalRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

function HospitalRoute() {
  //@ts-ignore
  return <Hospital {...useLocation().state} />
}

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
