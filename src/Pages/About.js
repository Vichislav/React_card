import React, {Component} from 'react';
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import about1 from "../Assets/about1.jpg"
import about2 from "../Assets/about2.jpg"
import about3 from "../Assets/about3.jpg"

class About extends Component {
    render() {
        return (
           <Container>
               <TabContainer id="let-tabs-example" defaultActiveKey="education">
                   <Row>
                      <Col sm={3}>
                          <Nav variant="pills" className="flex-column mt-2">
                              <Nav.Item>
                                  <Nav.Link eventKey="education"> Образование </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="work"> Работа </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="skills"> Приобретенные навыки </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="hobby"> Хобби </Nav.Link>
                              </Nav.Item>
                          </Nav>
                      </Col>
                       <Col sm={9}>
                           <TabContent className="mt-3">
                               <TabPane eventKey="education">
                                   <Row>
                                       <Col xs={12} md={8}>
                                           <h4>ФГБОУ ВО "СибАДИ"</h4>
                                           <p> 2007-2012 г. Нефтегазовая и строительная техника, Подъемно-транспортные,
                                               строительные, дорожные машины и оборудование. Инженер-конструктор</p>
                                           <p> 2014-2018 г. Институт магистратуры и аспирантуры,
                                               05.05.04 – Дорожные, строительные и подъемно-транспортные машины.
                                               Кандидат технических наук</p>
                                           <p>
                                               На сегодняшний день имеется 22 публикации, из которых 1 монография, 6 патентов на полезную модель, 4 статьи ВАК.
                                           </p>
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
                                   <Row>
                                       <Col xs={12} md={8}>
                                           <h4>ООО «Дальнефтепровод» филиал районное нефтепроводное управление «Дальнереченск» нефтеперекачивающая станция №36
                                               Механик участка технологического транспорта и спецтехники
                                           </h4>
                                           <p> (Июль 2012 — декабрь 2012) Выпуск техники на линию, ведение документации участка, контроль технического состояния техники,
                                               составление и контроль графика ТО техники, сдача отчета ГСМ, материальная ответственность за
                                               оборудование участка, контроль за соблюдение правил пожарной безопасности.</p>
                                       </Col>
                                       <Col xs={6} md={4}>
                                           <img
                                               src={about2}
                                               height="200"
                                               width="200"
                                               alt="Transneft"
                                           />
                                       </Col>
                                   </Row>
                                   <Row className="mt-3">
                                       <Col xs={12} md={8} >
                                           <h4>ООО «НПО «Мостовик» Крановый завод
                                               Инженер-конструктор, отдел главного конструктора
                                           </h4>
                                           <p> (Февраль 2013 — июнь 2014) Выполнение конструкторской документации (работа производилась в Компас-3D).
                                               За время работы были две командировки во Владивосток, о. Русский, там задача состояла в выполнении
                                               исполнительной документации (работа производилась в AutoCAD).</p>
                                       </Col>
                                       <Col xs={6} md={4} >
                                           <img
                                               src={about3}
                                               height="200"
                                               width="200"
                                               alt="Mostovick"
                                           />
                                       </Col>
                                   </Row>
                                   <Row className="mt-3">
                                       <Col xs={12} md={8}>
                                           <h4>ФГБОУ ВО "СибАДИ"
                                               преподаватель, кафедра "Механика"
                                           </h4>
                                           <p> (Сентябрь 2016 — июнь 2018) Ведение лабораторных и практических занятий,
                                               дисциплина "Детали машин и основы конструирования".</p>
                                           <h4>Учебный мастер, кафедра "Механика"</h4>
                                           <p> (Август 2014 — по настоящее время) Ведение документации кафедры</p>
                                           <h4>Доцент, кафедра "Автомобили, конструкционные материалы и технологии"</h4>
                                           <p> (Сентябрь 2018 — по настоящее время) Ведение лабораторных, практических и лекционных занятий.
                                               Ведение документации по производственной практике студентов. Дисциплины: </p>
                                           <ul>
                                               <li>Конструкция и теория транспортно-технологических машин. Конструкция тракторов;</li>
                                               <li>Конструкция и теория транспортно-технологических машин. Конструкция автомобиля;</li>
                                               <li>Технология автомобиле- и тракторостроения;</li>
                                               <li>Основы технологии машиностроения;</li>
                                               <li>Энергетические машины и установки;</li>
                                               <li>Основы САПР в энергомашиностроении;</li>
                                               <li>Компьютерное моделирование в двигателестроении.</li>
                                           </ul>
                                       </Col>
                                       <Col xs={6} md={4} >
                                           <img
                                               src={about1}
                                               height="200"
                                               width="200"
                                               alt="Sibadi"
                                           />
                                       </Col>
                                   </Row>
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
