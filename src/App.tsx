import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HospitalComponent from './components/hospital';
import { Repository, MockRepository } from './repository';
import { Hospital } from './types';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";


type AppProps = {
  className?: string
}

const repository : Repository = new MockRepository();
const exampleHospital : Hospital = repository.getHospitalById(1234);

const App = ({ className } : AppProps) => (
  <div className="App">
  <FormattedMessage
    id="app.greeting"
    description="Greeting to welcome the user to the app"
    defaultMessage="Hello, {name}!"
    values={{
      name: 'Alex',
    }}>
    {(txt) =>
      <p className={className}>{txt}</p>
    }
  </FormattedMessage>
    <HospitalComponent {...exampleHospital} />
  </div>
);

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
