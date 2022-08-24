import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import card_1 from "../Assets/Card_1.jpg"
import card_2 from "../Assets/Card_2.jpg"
import card_3 from "../Assets/Card_3.jpg"

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Container className="m-auto">
                    <h3 className="m-3 text-center" >Мои сильные стороны</h3>
                    <CardGroup className="m-3">
                        <Card style={{ width: '18rem' }} className="p-1 bg-light">
                            <Card.Img variant="top"
                                      src={card_1}
                                      height="220"
                                      width="260"
                            />
                            <Card.Body>
                                <Card.Title>Упорство</Card.Title>
                                <Card.Text>
                                    Написание диссертации требует наличия определенного уровня упорства.
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
