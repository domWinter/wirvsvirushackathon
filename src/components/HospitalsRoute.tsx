import React, { useEffect, useState }  from 'react';

import { Hospital } from '../types';

import Client from '../client/client';
import HospitalList from './HospitalList';

export const HospitalsRoute = () => {
  const [hospitals, setHospitals] = useState<Hospital[] | undefined>()

  useEffect(() => {
    const client = new Client();
    client.getHospitals()
    .then(setHospitals)
    .catch((error) => console.error(error));
  }, []);
  
  return (
    <>
      {hospitals && <HospitalList hospitals={hospitals}/>}
    </>
  );
};

export default HospitalsRoute;
