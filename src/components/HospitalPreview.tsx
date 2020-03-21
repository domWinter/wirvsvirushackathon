import React from 'react'
import { Hospital as HospitalProps } from '../types'
import { Button } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";

const HospitalPreview = ({
    name,
    address: {city, postcode, street, streetNumber},
    phoneNumber,
    website
} : HospitalProps) => {
    return (
        <>
            <td>{name}</td>
            <td>{street} {streetNumber} <br/>
            {postcode}, {city}</td>
            <FormattedMessage
              id="phone"
              description="phone"
              defaultMessage="Phone"
            >
              {(phone) =>
                <td>{phoneNumber}</td>
              }
            </FormattedMessage>
            <FormattedMessage
              id="website"
              description="website"
              defaultMessage="Website"
            >
            {(websiteTxt) =>
              <td><a href={website}><Button size="sm" variant="light">Link</Button></a></td>
            }
            </FormattedMessage>
        </>
    ); 
};

export default HospitalPreview;
