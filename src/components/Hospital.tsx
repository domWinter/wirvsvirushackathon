import React from 'react';
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
        <p>{websiteTxt}: <a href={website}>{website}</a></p>
      }
    </FormattedMessage>
    <FormattedMessage
      id="phone"
      description="Phone number"
      defaultMessage="Phone number"
    >
      {(txt) =>
        <p>{txt}: {phoneNumber}</p>
      }
    </FormattedMessage>
  </>
);

export default Hospital;
