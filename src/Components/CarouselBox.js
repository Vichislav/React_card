import React, {Component} from 'react';
import {Carousel, Container} from "react-bootstrap";
import photo1 from '../Assets/photo1.jpg'
import photo2 from '../Assets/photo2.jpg'
import photo3 from '../Assets/photo3.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Container className="w-50 m-auto">
                <Carousel variant="dark" >
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={photo1}
                            height="600"
                            width="800"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <h3>Вы можете изучить работу сайта</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo2}
                            height="600"
                            width="800"
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                            <h3>Можно ознакомиться с информацией обо мне</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="600"
                            width="800"
                            src={photo3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                            <h3>
                                Можно связаться со мной
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselBox;
