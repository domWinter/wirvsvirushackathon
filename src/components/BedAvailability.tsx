import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { BedAvailability as BedAvailabilityProps } from '../types';
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

import { compVariant } from '../utils/utils';

const BedAvailability = ({
  iculc,
  iculcMax,
  icuhc,
  icuhcMax,
  ecmo,
  ecmoMax,
  timestamp
} : BedAvailabilityProps) => (
  <>
    <Table style={ { height: 145 } } striped bordered hover variant="dark">
      <thead>
        <tr>
          <FormattedMessage
            id="iculc"
            defaultMessage="ICULC"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="icuhc"
            defaultMessage="ICUHC"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="ecmo"
            defaultMessage="ECMO"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="updated"
            description="updated timed"
            defaultMessage="Updated"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Badge pill variant={compVariant(iculc,iculcMax)}>{iculc + "/" + iculcMax}</Badge></td>
          <td><Badge pill variant={compVariant(icuhc,icuhcMax)}>{icuhc + "/" + icuhcMax}</Badge></td>
          <td><Badge pill variant={compVariant(ecmo,ecmoMax)}>{ecmo + "/" + ecmoMax}</Badge></td>
          <td><FormattedDate value={timestamp}/> <FormattedTime value={timestamp}/></td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default BedAvailability;
