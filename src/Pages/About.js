import React, {Component} from 'react';
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

class About extends Component {
    render() {
        return (
           <Container>
               <TabContainer id="ledt-tabs-example" defaultActiveKey="education">
                   <Row>
                      <Col sm={3}>
                          <Nav variant="pills" className="flex-column mt-2">
                              <Nav.Item>
                                  <Nav.Link eventKey="education"> Education </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="work"> Work </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="skills"> Acquired skills </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="hobby"> hobby </Nav.Link>
                              </Nav.Item>
                          </Nav>
                      </Col>
                       <Col sm={9}>
                           <TabContent>
                               <TabPane eventKey="education">
                                   <img
                                       src="https://sibadi.org/bitrix/templates/sibadi_front-new/images/sibadi.png"
                                       alt="sibadi"
                                   />
                                   <p>Сегодня СибАДИ – это инновационно-ориентированный, отраслевой вуз в сфере
                                       транспорта и строительства.</p>
                               </TabPane>
                               <TabPane eventKey="work">
                                   <img
                                       src="https://sibadi.org/bitrix/templates/sibadi_front-new/images/sibadi.png"
                                       alt="sibadi"
                                   />
                                   <p>Сегодня СибАДИ – это ну такое Если честно.</p>
                               </TabPane>
                               <TabPane eventKey="skills">
                                   <img
                                       src="https://sibadi.org/bitrix/templates/sibadi_front-new/images/sibadi.png"
                                       alt="sibadi"
                                   />
                                   <p>Чем богаты тем и рады</p>
                               </TabPane>
                               <TabPane eventKey="hobby">
                                   <img
                                       src="https://sibadi.org/bitrix/templates/sibadi_front-new/images/sibadi.png"
                                       alt="sibadi"
                                   />
                                   <p>Когда как, куда и зачем</p>
                               </TabPane>
                           </TabContent>
                       </Col>
                   </Row>
               </TabContainer>
           </Container>
        );
    }
}

export default About;
