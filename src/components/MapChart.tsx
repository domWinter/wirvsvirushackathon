import React, { useEffect, useState } from 'react';
import { Client } from '../client/client';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends React.Component<any, any> {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 48.133333, lng: 11.566667}} />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
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