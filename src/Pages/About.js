import React, {Component} from 'react';
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import about1 from "../Assets/about1.jpg"

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
                                   <Row>
                                       <Col xs={12} md={8}>
                                           <h4>ФГБОУ ВО "СибАДИ"</h4>
                                           <p> 2007-2012 г. Нефтегазовая и строительная техника, Подъемно-транспортные,
                                               строительные, дорожные машины и оборудование</p>
                                           <p> 2014-2018 г. Институт магистратуры и аспирантуры, 05.05.04 – Дорожные, строительные и подъемно-транспортные машины</p>
                                       </Col>
                                       <Col xs={6} md={4}>
                                           <img
                                               src={about1}
                                               height="200"
                                               width="200"
                                               alt="Sibadi"
                                           />
                                       </Col>
                                   </Row>
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
