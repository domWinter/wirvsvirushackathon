import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { BedAvailability as BedAvailabilityProps } from '../types';
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

const BedAvailability = ({
  iculc,
  icuhc,
  ecmo,
  timestamp
} : BedAvailabilityProps) => (
  <>
    <Table style={ { height: 145 } } striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ICULC</th>
          <th>ICUHC</th>
          <th>ECMO</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <FormattedMessage
            id="iculc"
            defaultMessage="ICULC"
          >
            {(txt) =>
              <td> <Badge pill variant="success">{iculc}</Badge></td>
            }
          </FormattedMessage>
          <FormattedMessage
            id="icuhc"
            defaultMessage="ICUHC"
          >
            {(txt) =>
              <td><Badge pill variant="success">{iculc}</Badge></td>
            }
          </FormattedMessage>
          <FormattedMessage
            id="ecmo"
            defaultMessage="ECMO"
          >
            {(txt) =>
              <td><Badge pill variant="danger">{ecmo}</Badge></td>
            }
          </FormattedMessage>
          <FormattedMessage
            id="availableBeds"
            description="available beds"
            defaultMessage="Available Beds"
          >
            {(availableBeds) =>
              <td><FormattedDate value={timestamp}/> <FormattedTime value={timestamp}/></td>
            }
          </FormattedMessage>
        </tr>
      </tbody>
    </Table>
  </>
);

export default BedAvailability;
