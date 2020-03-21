import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from './components/Hospital';
import HospitalPreview from './components/HospitalPreview';
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
  const [hospital, setHospital] = useState<HospitalI | undefined>()
  const [hospitals, setHospitals] = useState<HospitalI[] | undefined>()
  useEffect(() => {
    repository.getHospitalById(1234)
    .then(setHospital)
    .catch((error) => console.log("Cannot fetch hospital"));
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
      {hospital && <Hospital {...hospital}/>}
      {hospitals && hospitals.map((hospital, i) =>
        <Hospital {...hospital}/>
      )}
    </div>
  );
};

const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
