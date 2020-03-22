import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedMessage, useIntl, defineMessages } from "react-intl";
import HeatmapLayer from "react-leaflet-heatmap-layer";

import {
  HeatMap,
  Marker as MarkerI
} from '../types';

import {
  Map as OpenMap,
  FeatureGroup,
  Marker,
  Popup,
  LayersControl,
  TileLayer
} from "react-leaflet";

import { compVariant } from '../utils/utils';


type MapProps = {
  heatMap: HeatMap
  markers: MarkerI[]
};

const MUNICH = [48.13743, 11.57549];
const MAX = 0.53;
const INTENSITY_FACTOR = 4;

export const Map = ({heatMap, markers} : MapProps) => {
  const intl = useIntl();
  const messages = defineMessages({
    marker: { id: 'marker', defaultMessage: 'Marker' },
    heatMap: { id: 'heatMap', defaultMessage: 'Heat Map' },
    ecmo: { id: 'ecmo', defaultMessage: 'ECMO' },
    iculc: { id: 'iculc', defaultMessage: 'ICULC' },
    icuhc: { id: 'iculc', defaultMessage: 'ICUHC' }
  });

  return (
    <OpenMap
      center={MUNICH}
      zoom={12}
      animate={true}
    >
      <LayersControl>
        <LayersControl.BaseLayer name="Base" checked>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name={intl.formatMessage(messages.heatMap) + " " + intl.formatMessage(messages.iculc)} checked>
          <FeatureGroup color="purple">
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={heatMap}
              longitudeExtractor={m => m.longitude}
              latitudeExtractor={m => m.latitude}
              intensityExtractor={m => (m.icuhcIntensity)*INTENSITY_FACTOR}
              max={MAX}
            />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={intl.formatMessage(messages.heatMap) + " " + intl.formatMessage(messages.icuhc)}>
          <FeatureGroup color="purple">
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={heatMap}
              longitudeExtractor={m => m.longitude}
              latitudeExtractor={m => m.latitude}
              intensityExtractor={m => m.icuhcIntensity*INTENSITY_FACTOR}
              max={MAX}
            />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={intl.formatMessage(messages.heatMap) + " " + intl.formatMessage(messages.ecmo)}>
          <FeatureGroup color="purple">
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={heatMap}
              longitudeExtractor={m => m.longitude}
              latitudeExtractor={m => m.latitude}
              intensityExtractor={m => m.ecmoIntensity*INTENSITY_FACTOR}
              max={MAX}
            />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name={intl.formatMessage(messages.marker)} checked>
          <FeatureGroup color="purple">
            {/* GGG We should have not flattened in the db here...*/}
            {markers.map(({longitude,latitude,name,timestamp,iculc,iculcMax,icuhc,icuhcMax,ecmo,ecmoMax,id,phoneNumber,website,
              state, city, postcode, street, streetNumber },i) => 
              <Marker key={i} position={[latitude,longitude]} >
                <Popup>
                  <span>{name}</span>
                  <FormattedMessage
                    id="iculc"
                    defaultMessage="ICULC"
                  >
                    {(txt) => <p>{txt} <Badge pill variant={compVariant(iculc,iculcMax)}>{(iculcMax-iculc) + "/" + iculcMax}</Badge></p>}
                  </FormattedMessage>
                  <FormattedMessage
                    id="icuhc"
                    defaultMessage="ICUHC"
                  >
                    {(txt) => <p>{txt} <Badge pill variant={compVariant(icuhc,icuhcMax)}>{(icuhcMax-icuhc) + "/" + icuhcMax}</Badge></p>}
                  </FormattedMessage>
                  <FormattedMessage
                    id="ecmo"
                    defaultMessage="ECMO"
                  >
                    {(txt) => <p>{txt} <Badge pill variant={compVariant(ecmo,ecmoMax)}>{(ecmoMax-ecmo) + "/" + ecmoMax}</Badge></p>}
                  </FormattedMessage>
                  <FormattedMessage
                    id="updated"
                    description="updated timed"
                    defaultMessage="Updated"
                  >
                    {(txt) => <p>{txt} <FormattedDate value={timestamp}/> <FormattedTime value={timestamp}/></p>}
                  </FormattedMessage>
                  <Link to={{
                      pathname: `/hospital/${id}`,
                      state: {
                        id,
                        name,
                        address: { state, city, postcode, street, streetNumber },
                        phoneNumber,
                        website,
                        location: {latitude, longitude}
                      }
                    }}
                  >
                    <FormattedMessage
                      id="details"
                      description="Detailed information"
                      defaultMessage="Details"
                    >
                      {(txt) => <div className="text-center"><Button size="sm" className="" variant="info">{txt}</Button></div>}
                    </FormattedMessage>
                  </Link>
                </Popup>
              </Marker>
            )}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </OpenMap>
  );
}

export default Map;
