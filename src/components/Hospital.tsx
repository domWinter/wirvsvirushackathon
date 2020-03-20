import React from 'react';
import { Hospital as HospitalProps } from '../types';

const Hospital = ({
  address: {city, postcode, state, street, streetNumber},
  name,
  phoneNumber,
  website
} : HospitalProps) => (
  <div>
    <h2>{name}</h2>
    <h3>Address:</h3>
    <p>{street} {streetNumber}<br/>
    {postcode}, {city}<br/>
    {state}</p>
    <h3>Contact:</h3>
    <p>Website: {website}<br/>
    Phone Number: {phoneNumber}</p>
  </div>
);

export default Hospital;
