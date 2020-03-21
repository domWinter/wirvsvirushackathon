import React, { useEffect, useState } from 'react';
import { Client } from '../client/client';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends React.Component<any, any> {
    renter() {
        return (
            <Map 
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}} />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCvMhJbAdn-7DIlRDbC9GB9aio0P6fQdVo'
})(MapContainer);

function markersFromHospitals(hospitals) {
    const markers = hospitals.map(hospital => {
        return {
            name: hospital.name,
            coordinates: [hospital.location.longitude, hospital.location.latitude]
        };
    });

    return markers;
}