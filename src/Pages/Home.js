import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import card_1 from "../Assets/Card_1.jpg"
import card_2 from "../Assets/Card_2.jpg"
import card_3 from "../Assets/Card_3.jpg"
import '../css/home.css'



class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="wrapContainer">
                    <div className="wrapContainerContent">
                        <h2 className="wrapContainerContentTitle">
                            Привет! Меня зовут Вячеслав и я изучаю JavaScript.
                        </h2>
                        <p className="wrapContainerContentText">
                            Этот сайт я сделал, как удобный вариант демонстрации своего уровня познания JavaScript, и неплохую возможность рассказать о себе.
                        </p>
                    </div>
                    <div className="wrapContainerCarousel">
                        <CarouselBox />
                    </div>
                </div>
                <div className="wrapBelt">
                    <p className="wrapContainerContentText mt-2">
                        Сайт написан с применением React Bootstrap, React-redux
                    </p>
                </div>
                <Container className="m-auto">
                    <h3 className="wrapContainerContentTitle m-3 text-center" >Мои учебные проекты</h3>
                    <CardGroup className="m-3">
                        <Card  style={{ width: '18rem' }} className="p-1 bg-light">
                            <Card.Img variant="top"
                                      src={card_1}
                                      height="220"
                                      width="260"
                            />
                            <Card.Body>
                                <Card.Title>Todo App</Card.Title>
                                <Card.Text>
                                    Приложение написанно с применением Angular и NgRx
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top"
                                      src={card_2}
                                      height="220"
                                      width="260"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className="p-1 bg-light">
                            <Card.Img variant="top"
                                      src={card_3}
                                      height="220"
                                      width="260"
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}

export default Home;
