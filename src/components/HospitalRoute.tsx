import React, { useEffect, useState }  from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useIntl, defineMessages } from "react-intl";

import {
  Hospital as HospitalI,
  BedAvailability as BedAvailabilityI
} from '../types';

import BedAvailability from './BedAvailability';
import Client from '../client/client';
import Hospital from './Hospital';
import LineChart from "./LineChart";

const MAX_POINTS = 10;

export const HospitalRoute = () => {
  const id: number = parseInt((useParams() as { id: string }).id);
  const hospitalFromState : HospitalI = useLocation().state as HospitalI;
  const [hospital, setHospital] = useState<HospitalI>();
  const [bedAvailabilityLatest, setBedAvailabilityLatest] = useState<BedAvailabilityI>();
  const [bedAvailabilityData, setBedAvailabilityData] = useState<any>();
  const intl = useIntl();

  const transformBedAvailability = (bedAvailability)  => {
    const data = bedAvailability.reduceRight(({dIculc,dIcuhc,dEcmo}, {timestamp,iculc,icuhc,ecmo,...rest}) => {
      const xDate = intl.formatDate(timestamp) + " " + intl.formatTime(timestamp);
      return {
        dIculc: [...dIculc, {x: xDate, y: iculc}],
        dIcuhc: [...dIcuhc, {x: xDate, y: icuhc}],
        dEcmo: [...dEcmo, {x: xDate, y: ecmo}]
      };
    }, {dIculc: [], dIcuhc: [], dEcmo: []});
    const messages = defineMessages({
      iculc: { id: 'iculc', defaultMessage: 'ICULC' },
      icuhc: { id: 'icuhc', defaultMessage: 'ICUHC' },
      ecmo: { id: 'ecmo', defaultMessage: 'ECMO' }
    });
    setBedAvailabilityData([
      {
        id: intl.formatMessage(messages.iculc),
        data: data.dIculc.splice(0, Math.min(MAX_POINTS,data.dIculc.length))
      },
      {
        id: intl.formatMessage(messages.icuhc),
        data: data.dIcuhc.splice(0, Math.min(MAX_POINTS,data.dIcuhc.length)),
      },
      {
        id: intl.formatMessage(messages.ecmo),
        data: data.dEcmo.splice(0, Math.min(MAX_POINTS,data.dEcmo.length))
      }
    ]);
  }

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
    .then(setBedAvailabilityLatest)
    .catch(console.error);
    client.getBedAvailability(id)
    .then(transformBedAvailability)
    .catch(console.error);
  }, [id, hospitalFromState]);
  
  return (
    <>
      {hospital && <Hospital {...hospital} />}
      {bedAvailabilityLatest && <BedAvailability {...bedAvailabilityLatest} />}
      {bedAvailabilityData && <LineChart height={'400px'} width={'100%'} data={bedAvailabilityData} />}
     <Link to='/'>Back</Link>
   </>
  );
};

export default HospitalRoute;
