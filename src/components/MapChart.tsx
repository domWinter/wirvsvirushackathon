import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Client } from '../client/client';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = () => {

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const client = new Client();
        client.getHospitals().then(hospitals => {
            setMarkers(markersFromHospitals(hospitals));
        });
    });

    return (
        <ComposableMap>
            <ZoomableGroup 
                center={[11.566667, 48.133333]}
                zoom={200}
                >
                <Geographies geography={geoUrl}>
                    {({ geographies }) => 
                        geographies
                        .filter(d => d.properties.REGION_UN === 'Europe')
                        .map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill='#aaa'
                                stroke='#000' />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={0.02} fill='#a22'/>
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
    );
};

function markersFromHospitals(hospitals) {
    const markers = hospitals.map(hospital => {
        return {
            name: hospital.name,
            coordinates: [hospital.location.longitude, hospital.location.latitude]
        };
    });

    return markers;
}

export default MapChart;