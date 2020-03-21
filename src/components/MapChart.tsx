import React from 'react';

import { Map as OpenMap, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <OpenMap center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </OpenMap>
  );
}

function markersFromHospitals(hospitals) {
    return hospitals.map(hospital => {
        return {
            name: hospital.name,
            coordinates: [hospital.location.longitude, hospital.location.latitude]
        };
    });
}
