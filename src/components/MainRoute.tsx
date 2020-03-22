import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import HospitalsRoute from './HospitalsRoute';
import { FormattedMessage } from "react-intl";
import MapRoute from './MapRoute';

export const MainRoute = () => {
  return (
    <>
        <Row style={{margin: 0}}>
          <Col style={{ maxWidth: '100%', 'padding': 0 }}>
            <Card className="bg-dark text-white">
              <FormattedMessage
                id="hospitals"
                description="hospitals"
                defaultMessage="Hospitals"
              >
                {(txt) => <Card.Header><h2>{txt}</h2></Card.Header>}
              </FormattedMessage>
              <HospitalsRoute />
            </Card>
          </Col>
        </Row> 
        <Row style={{margin: 0}}>
          <Col style={{ maxWidth: '100%', 'padding': 0 }}>
            <Card className="bg-dark text-white">
              <FormattedMessage
                id="heatMap"
                description="heatMap"
                defaultMessage="Heat Map"
              >
                {(txt) => <Card.Header><h2>{txt}</h2></Card.Header>}
              </FormattedMessage>
              <FormattedMessage
                id="heatMapEpxlanation"
                description="Explanation for the heat map"
                defaultMessage="TODO"
              >
                {(txt) => <p>{txt}</p>}
              </FormattedMessage>
              <MapRoute />
            </Card>
          </Col>
        </Row>
    </>
  );
};

export default MainRoute;
