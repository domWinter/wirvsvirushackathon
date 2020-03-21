import React from 'react';
import { Link } from 'react-router-dom';
import { Hospital as HospitalProps } from '../types';
import { FormattedMessage } from "react-intl";

const Hospital = ({
  address: {city, postcode, state, street, streetNumber},
  name,
  phoneNumber,
  website
} : HospitalProps) => (
  <>
    <h2>{name}</h2>
    <FormattedMessage
      id="address"
      description="address"
      defaultMessage="Address"
    >
      {(address) =>
        <h3>{address}:</h3>
      }
    </FormattedMessage>
    <p>{street} {streetNumber}<br/>
    {postcode}, {city}<br/>
    {state}</p>

    <FormattedMessage
      id="contact"
      description="contact"
      defaultMessage="Contact"
    >
      {(contact) =>
        <h3>{contact}:</h3>
      }
    </FormattedMessage>
    <FormattedMessage
      id="website"
      description="website"
      defaultMessage="Website"
    >
      {(websiteTxt) =>
        <p>{websiteTxt}: <a href={website}>{website}</a><br/>
        Phone Number: {phoneNumber}</p>
      }
    </FormattedMessage>

    <FormattedMessage
      id="availableBeds"
      description="available beds"
      defaultMessage="Available Beds"
    >
      {(availableBeds) =>
        <h3>{availableBeds}:</h3>
      }
    </FormattedMessage>
    <Link to='/'>Back</Link>
  </>
);

export default Hospital;
