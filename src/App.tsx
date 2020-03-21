import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HospitalList from './components/HospitalList';
import Hospital from './components/Hospital';
// TODO change to real repository
import { Repository } from './client/client';
import {
  Hospital as HospitalI,
  Repository as RepositoryI
} from './types';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";

type AppProps = {
  className?: string
}

const repository : RepositoryI = new Repository();

const App = ({ className } : AppProps) => {
  const [hospitals, setHospitals] = useState<HospitalI[] | undefined>()
  useEffect(() => {
    repository.getHospitals()
    .then(setHospitals)
    .catch((error) => console.log("Cannot fetch hospitals"));
  }, []);

  return (
    <div className={className}>
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
            //@ts-ignore
            <HospitalRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

function HospitalRoute({ location } : RouteComponentProps<{}, {}, HospitalI>) {
  return <Hospital {...location.state} />
}

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
