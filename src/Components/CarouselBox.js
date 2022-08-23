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
                            height="400"
                            width="700"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo2}
                            height="400"
                            width="700"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="400"
                            width="700"
                            src={photo3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselBox;
