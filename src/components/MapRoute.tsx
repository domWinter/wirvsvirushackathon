import React, { useEffect, useState }  from 'react';

import { MapDataEntry, HeatMap, Marker } from '../types';
import Client from '../client/client';
import Map from './MapChart';

export const MapRoute = ({date}) => {
  const [heatMap, setHeatMap] = useState<HeatMap | undefined>();
  const [markers, setMarkers] = useState<Marker[] | undefined>();
  const transformData = (mapData) => {
    const { heatMap, markers } = mapData.reduce(({markers, heatMap}, {
      name,
      longitude,
      latitude,
      iculc,
      iculcMax,
      icuhc,
      icuhcMax,
      ecmo,
      ecmoMax,
      timestamp,
      phoneNumber,
      id,
      state,
      city,
      postcode,
      street,
      streetNumber,
      ...rest
    }:MapDataEntry) => {
      return {
        markers: [...markers, {
          longitude,
          latitude,
          name,
          timestamp,
          iculc,
          iculcMax,
          icuhc,
          icuhcMax,
          ecmo,
          phoneNumber,
          id,
          ecmoMax,
          state,
          city,
          postcode,
          street,
          streetNumber,
        }],
        heatMap: [
          ...heatMap,
          {
            longitude,
            latitude,
            sumIntensity: (1.0*iculcMax+icuhcMax+ecmoMax-iculc-icuhc-ecmo)/(iculcMax+icuhcMax+ecmoMax),
            iculcIntensity: (iculcMax-iculc*1.0)/iculcMax,
            icuhcIntensity: (icuhcMax-icuhc*1.0)/icuhcMax,
            ecmoIntensity: (ecmoMax-ecmo*1.0)/ecmoMax
          }
        ]
      };
    }, {markers: [], heatMap: []});
    setHeatMap(heatMap);
    setMarkers(markers);
  }

  useEffect(() => {
    const client = new Client();
    client.getMapData({date: Math.round(date)})
    .then(transformData)
    .catch((error) => console.error(error));
  }, [date]);
  
  return (
    <>
      {heatMap && markers && <Map heatMap={heatMap} markers={markers}/>}
    </>
  );
};

export default MapRoute;
