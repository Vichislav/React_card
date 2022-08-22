import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import photo1 from '../Assets/photo1.jpg'
import photo2 from '../Assets/photo2.jpg'
import photo3 from '../Assets/photo3.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="b-block w-80"
                        src={photo1}
                        height="375"
                        width="640"
                        alt={photo1}
                    />
                    <Carousel.Caption>
                        <h3>photo1</h3>
                        <p>The is photo1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-80"
                        src={photo2}
                        height="375"
                        width="640"
                        alt={photo2}
                    />
                    <Carousel.Caption>
                        <h3>photo2</h3>
                        <p>The is photo2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-block w-80"
                        src={photo3}
                        height="375"
                        width="640"
                        alt={photo3}
                    />
                    <Carousel.Caption>
                        <h3>photo3</h3>
                        <p>The is photo3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
