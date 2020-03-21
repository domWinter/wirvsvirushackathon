import React from 'react'
import { Hospital as HospitalProps } from '../types'

const HospitalPreview = ({
    name,
    address: {city, postcode, street, streetNumber},
    phoneNumber,
    website
} : HospitalProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{street} {streetNumber} <br/>
            {postcode}, {city}</p>
            <p>Phone: {phoneNumber} <br/>
            Website: <a href={website}>{website}</a></p>
        </div>
    ); 
};

export default HospitalPreview;
