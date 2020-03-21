import React, { useEffect, useState }  from 'react';

import { HeatMap, Marker } from '../types';
import Client from '../client/client';
import Map from './MapChart';

export const MapRoute = () => {
  const [heatMap, setHeatMap] = useState<HeatMap | undefined>()
  const [markers, setMarkers] = useState<Marker[] | undefined>()
  const transformData = (mapData) => {
    const { heatMap, markers } = mapData.reduce(({marker, heatMap}, {
      name,
      longitude,
      latitude,
      iculc,
      iculcMax,
      icuhc,
      icuhcMax,
      ecmo,
      ecmoMax,
      timestap,
      ...rest
      }) => {
      return {
        marker,
        heatMap: [
          ...heatMap,
          {
            longitude,
            latitude,
            iculcItensity: (parseFloat(iculcMax)-iculc)/iculcMax,
            icuhcItensity: (parseFloat(icuhcMax)-icuhc)/icuhcMax,
            ecmoItensity: (parseFloat(ecmoMax)-ecmo)/ecmoMax,
          }
        ]
      };
    }, {marker: [], heatMap: []});
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
