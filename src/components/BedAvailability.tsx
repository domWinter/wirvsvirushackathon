import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { BedAvailability as BedAvailabilityProps } from '../types';
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

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
          <td><Badge pill variant="success">{iculc + "/" + iculcMax}</Badge></td>
          <td><Badge pill variant="success">{icuhc + "/" + icuhcMax}</Badge></td>
          <td><Badge pill variant="success">{ecmo + "/" + ecmoMax}</Badge></td>
          <td><FormattedDate value={timestamp}/> <FormattedTime value={timestamp}/></td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default BedAvailability;
