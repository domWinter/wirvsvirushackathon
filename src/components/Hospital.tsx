import React from 'react';
import { Hospital as HospitalProps } from '../types';

const Hospital = ({
  address: {city, postcode, state, street, streetNumber},
  name,
  phoneNumber,
  website,
  beds: {iculc, icuhc, ecmo}
} : HospitalProps) => (
  <div>
    <h2>{name}</h2>

    <h3>Address:</h3>
    <p>{street} {streetNumber}<br/>
    {postcode}, {city}<br/>
    {state}</p>

    <h3>Contact:</h3>
    <p>Website: <a href={website}>{website}</a><br/>
    Phone Number: {phoneNumber}</p>

    <h3>Available Beds:</h3>
    <p>ICULC: {iculc} <br/>
      ICUHC: {icuhc} <br/>
      ECMO: {ecmo}</p>
  </div>
);

export default Hospital;
