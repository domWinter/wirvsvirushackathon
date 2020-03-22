import React from 'react';
import { Hospital as HospitalProps } from '../types';
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
          <FormattedMessage
            id="name"
            description="name"
            defaultMessage="Name"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="address"
            description="address"
            defaultMessage="Address"
          >
            {(address) =><th>{address}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="website"
            description="website"
            defaultMessage="Website"
          >
            {(websiteTxt) => <th>{websiteTxt}</th>}
          </FormattedMessage>
          <FormattedMessage
            id="phone"
            description="Phone number"
            defaultMessage="Phone number"
          >
            {(txt) => <th>{txt}</th>}
          </FormattedMessage>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{street} {streetNumber}<br/>
          {postcode}, {city}</td>
          <FormattedMessage
            id="link"
            description="link"
            defaultMessage="Link"
          >
            {(txt) => <td><a href={website}><Button size="sm" variant="info">{txt}</Button>{' '}</a></td>}
          </FormattedMessage>
          <td>{phoneNumber}</td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default Hospital;
