import React, {Component} from 'react';
import {Carousel, Container} from "react-bootstrap";
import photo1 from '../Assets/photo1.jpg'
import photo2 from '../Assets/photo2.jpg'
import photo3 from '../Assets/photo3.jpg'
import photo4 from '../Assets/photo4.jpg'
import '../css/home.css'

class CarouselBox extends Component {
    render() {
        return (
            <div className="carWrap">
                <div className="carWrapImg">
                    <img className="carWrapImgPhoto"
                        src={photo4}
                        alt="First slide"
                    />
                </div>
                <div className="carWrapCar">
                    <Container className="carWrapCarContainer"
                               aria-valuemax={"100%"}>
                        <Carousel variant="dark" >
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={photo1}
                                    aria-valuemax={"100%"}
                                    height="auto"
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                    <p className="carWrapCarSlideText">2 года я был инженером</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photo2}
                                    aria-valuemax={"100%"}
                                    height="auto"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>

                                    <p className="carWrapCarSlideText">6 лет я был преподавателем</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    aria-valuemax={"100%"}
                                    height="auto"
                                    src={photo3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                    <p className="carWrapCarSlideText">
                                        Теперь я мечтаю стать программистом
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </div>
            </div>
        );
    }
}

export default CarouselBox;
