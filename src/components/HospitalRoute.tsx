import React, { useEffect, useState }  from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  Hospital as HospitalI,
} from '../types';

import Client from '../client/client';
import Hospital from './Hospital';

export const HospitalRoute = () => {
  const hospitalId: number = parseInt((useParams() as { hospitalId: string }).hospitalId);
  const hospitalFromState : HospitalI = useLocation().state as HospitalI;
  const [hospital, setHospital] = useState<HospitalI>();

  useEffect(() => {
    if(hospitalFromState) {
      setHospital(hospitalFromState);
    }
    else {
      const client = new Client();
      client.getHospitalById(hospitalId)
      .then(setHospital)
      .catch((error) => console.log('Invalid ID'));
    }
  }, [hospitalId, hospitalFromState]);
  
  return (
    <>
      {hospital && <Hospital {...hospital} />}
    </>
  );
};

export default HospitalRoute;
