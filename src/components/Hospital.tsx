import React from 'react';
import { Hospital as HospitalProps } from '../types';
import { BedAvailability as BedAvailabilityProps } from '../types';
import { Table, Button } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";

const Hospital = ({
  address: {city, postcode, state, street, streetNumber},
  name,
  phoneNumber,
  website
  }: HospitalProps) => (
  <>
    <Table style={ { height: 145 } } striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Adresse</th>
          <th>Website</th>
          <th>Telefon</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <FormattedMessage
            id="address"
            description="address"
            defaultMessage="Address"
          >
            {(address) =>
              <td>{street} {streetNumber}<br/>
              {postcode}, {city}</td>
            }
          </FormattedMessage>
          <FormattedMessage
            id="website"
            description="website"
            defaultMessage="Website"
          >
            {(websiteTxt) =>
              <td><a href={website}><Button size="sm" variant="info">Link</Button>{' '}</a></td>
            }
          </FormattedMessage>
          <FormattedMessage
            id="phone"
            description="Phone number"
            defaultMessage="Phone number"
          >
            {(txt) =>
              <td>{phoneNumber}</td>
            }
          </FormattedMessage>
        </tr>
      </tbody>
    </Table>
  </>
);

export default Hospital;
