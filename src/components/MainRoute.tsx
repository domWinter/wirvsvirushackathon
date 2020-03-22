import React, {useState} from 'react';
import {Row, Col, Card, ListGroup, Tab, Nav} from 'react-bootstrap';
import HospitalsRoute from './HospitalsRoute';
import { useIntl, FormattedMessage } from "react-intl";
import MapRoute from './MapRoute';
import Slider from './Slider';

const DAYS = 100;

export const MainRoute = () => {
  const intl = useIntl();
  const [date,setDate] = useState(Date.now()/1000);

  return (
    <>
        <Row style={{margin: 0}}>
          <Col>
            <Card>
                <Card.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Website</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Funktionserklärung</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">ICULC / ICUHC / ECMO</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content style={{ textAlign:'left' }}>
                            <Tab.Pane style={{ fontSize:'14pt'}} eventKey="first" >
                              <FormattedMessage
                                id="websiteDescription"
                                description="Explanation of the website"
                                defaultMessage="Visualization of the occupation of hospital beds in munich. This is a demo site for the #WirvsVirus hackathon of the german gouvernment. This site does not contain real data! 
                                We want to show here how many beds of the type ICULC, ICUH and ECMO are available in the respective hospitals"
                              >
                                {(txt) => <p>{txt}</p>}
                              </FormattedMessage>
                            </Tab.Pane>
                            <Tab.Pane style={{ fontSize:'14pt'}} eventKey="second">
                              <FormattedMessage
                                id="heatMapExplanation"
                                description="Explanation for the heat map"
                                defaultMessage="Use the layer button on the right to visualise the bed capacities for different categories. You can change the date using the slider. Click on a marker to get more information about the chosen hospital."
                              >
                                {(txt) => <p>{txt}</p>}
                              </FormattedMessage>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <ListGroup variant="flush">
                              
                                <FormattedMessage
                                  id="iculcExplanation"
                                  description="Explanation of iculc"
                                  defaultMessage="Intensive care unit with low care"
                                >
                                  {(txt) => <ListGroup.Item>{txt}</ListGroup.Item>}
                                </FormattedMessage>
  
                                <FormattedMessage
                                  id="icuhcExplanation"
                                  description="Explanation of icuhc"
                                  defaultMessage="Intensive care unit with high care"
                                >
                                  {(txt) => <ListGroup.Item>{txt}</ListGroup.Item>}
                                </FormattedMessage>

                                <FormattedMessage
                                  id="ecmoExplanation"
                                  description="Explanation of ecmo"
                                  defaultMessage="Extracorporeal membrane oxygenation beds"
                                >
                                  {(txt) => <ListGroup.Item>{txt}</ListGroup.Item>}
                                </FormattedMessage>

                              </ListGroup>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{marginTop: '10px', margin: 0}}>
            <Col style={{ maxWidth: '100%', 'padding': 0 }}>
              <Card className="bg-dark text-white">
                <FormattedMessage
                  id="heatMap"
                  description="heatMap"
                  defaultMessage="Heat Map"
                >
                  {(txt) => <Card.Header><h2>{txt}</h2></Card.Header>}
                </FormattedMessage>
                <div style={{padding: '0 50px 30px 50px'}}>
                  <Slider max={DAYS} min={0}
                    onChange={(value) => {
                      let d = new Date()
                      d.setDate(d.getDate()-(DAYS-value));
                      setDate(d.getTime()/1000);
                    }}
                    formatLabel={(value) => {
                      let d = new Date()
                      d.setDate(d.getDate()-(DAYS-value));
                      return intl.formatDate(d)
                    }}
                  />
                </div>
                <MapRoute date={date}/>
              </Card>
            </Col>
        </Row>
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
    </>
  );
};

export default MainRoute;
