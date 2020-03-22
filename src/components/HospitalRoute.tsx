import React, { useEffect, useState }  from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
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
  const messages = defineMessages({
    iculc: { id: 'iculc', defaultMessage: 'ICULC' },
    icuhc: { id: 'icuhc', defaultMessage: 'ICUHC' },
    ecmo: { id: 'ecmo', defaultMessage: 'ECMO' },
    back: { id: 'back', defaultMessage: 'Back' },
    bedCapacity: { id: 'bedCapacity', defaultMessage: 'Bed Capacity' }
  });

  const transformBedAvailability = (bedAvailability)  => {
    const data = bedAvailability.reduceRight(({dIculc,dIcuhc,dEcmo}, {timestamp,iculc,icuhc,ecmo,...rest} : BedAvailabilityI) => {
      // const xDate = intl.formatDate(timestamp) + " " + intl.formatTime(timestamp);
      const xDate = intl.formatDate(timestamp);
      return {
        dIculc: [...dIculc, {x: xDate, y: iculc}],
        dIcuhc: [...dIcuhc, {x: xDate, y: icuhc}],
        dEcmo: [...dEcmo, {x: xDate, y: ecmo}]
      };
    }, {dIculc: [], dIcuhc: [], dEcmo: []});
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
       <Row>
        <Col>
          {hospital && <Hospital {...hospital} />}
        </Col>
        <Col>
          {bedAvailabilityLatest && <BedAvailability {...bedAvailabilityLatest} />}
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-dark text-white">
          <Card.Header><h2>{intl.formatMessage(messages.bedCapacity)}</h2></Card.Header>
            {bedAvailabilityData && <LineChart height={'800px'} width={'100%'} data={bedAvailabilityData} />}
          </Card> 
        </Col>
      </Row>
      <Link to='/'>{intl.formatMessage(messages.back)}<Button size="lg" variant="link"></Button></Link>
   </>
  );
};

            
export default HospitalRoute;
