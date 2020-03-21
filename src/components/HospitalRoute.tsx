import React, { useEffect, useState }  from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  Hospital as HospitalI,
  BedAvailability
} from '../types';

import Client from '../client/client';
import Hospital from './Hospital';

export const HospitalRoute = () => {
  const id: number = parseInt((useParams() as { id: string }).id);
  const hospitalFromState : HospitalI = useLocation().state as HospitalI;
  const [hospital, setHospital] = useState<HospitalI>();
  const [bedAvailability, setBedAvailability] = useState<BedAvailability>();

  useEffect(() => {
    const client = new Client();
    if(hospitalFromState) {
      setHospital(hospitalFromState);
    }
    else {
      client.getHospitalById(id)
      .then(setHospital)
      .catch(console.error);
    }
    client.getBedAvailabilityLatest(id)
    .then(setBedAvailability)
    .catch(console.error);
  }, [id, hospitalFromState]);
  
  return (
    <>
      {hospital && <Hospital {...hospital} />}
      {bedAvailability && <p>{JSON.stringify(bedAvailability)}</p>}
    </>
  );
};

export default HospitalRoute;
