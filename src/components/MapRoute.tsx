import React, { useEffect, useState }  from 'react';

import { MapDataEntry, HeatMap, Marker } from '../types';
import Client from '../client/client';
import Map from './MapChart';

export const MapRoute = () => {
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
      id,
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
          id,
          ecmoMax
        }],
        heatMap: [
          ...heatMap,
          {
            longitude,
            latitude,
            iculcIntensity: (iculc*1.0)/iculcMax,
            icuhcIntensity: (icuhc*1.0)/icuhcMax,
            ecmoIntensity: (ecmo*1.0)/ecmoMax
          }
        ]
      };
    }, {markers: [], heatMap: []});
    setHeatMap(heatMap);
    setMarkers(markers);
  }

  useEffect(() => {
    const client = new Client();
    client.getMapData()
    .then(transformData)
    .catch((error) => console.error(error));
  }, []);
  
  return (
    <>
      {heatMap && markers && <Map heatMap={heatMap} markers={markers}/>}
    </>
  );
};

export default MapRoute;
