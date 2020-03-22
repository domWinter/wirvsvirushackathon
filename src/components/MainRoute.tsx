import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import HospitalsRoute from './HospitalsRoute';
import MapRoute from './MapRoute';

export const MainRoute = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Header><h2>Krankenhäuser</h2></Card.Header>
              <HospitalsRoute />
            </Card>
          </Col>
        </Row> 
        <Row>
          <Col>
            <Card className="bg-dark text-white">
            <Card.Header><h2>Heatmap</h2></Card.Header>
                <MapRoute />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainRoute;
