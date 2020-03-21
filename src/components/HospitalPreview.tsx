import React from 'react'
import { Hospital as HospitalProps } from '../types'
import { FormattedMessage } from "react-intl";

const HospitalPreview = ({
    name,
    address: {city, postcode, street, streetNumber},
    phoneNumber,
    website
} : HospitalProps) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{street} {streetNumber} <br/>
            {postcode}, {city}</p>
            <FormattedMessage
              id="phone"
              description="phone"
              defaultMessage="Phone"
            >
              {(phone) =>
                <p>{phone}: {phoneNumber}</p>
              }
            </FormattedMessage>
            <FormattedMessage
              id="website"
              description="website"
              defaultMessage="Website"
            >
            {(websiteTxt) =>
              <p>{websiteTxt}: {website}</p>
            }
            </FormattedMessage>
        </>
    ); 
};

export default HospitalPreview;
