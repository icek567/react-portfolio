import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import flower from "./flower.jpg";
import river from "./river.jpg";
import chivas from "./chivas.JPG";
import night from "./night.JPG";
import woods from "./woods.jpg";
import birdhouse from "./birdhouse.jpg";
import sedona from "./sedona.jpeg";
import chicago from "./chicago.jpeg";
import starvedrock from "./starvedrock.jpeg"
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <div className="box3">
            <h1 className="gallery1">My Gallery</h1>
            <h4 className="gallery2">Enjoy some of the pictures I've taken. Photography is a hobby of mine. </h4>
            <Carousel>
                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={flower}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Guadalajara, Mexico</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={chivas}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Evanston, Illinois</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        className="Carousel"
                        src={river}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Guadalajara, Mexico</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={night}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Evanston, Illinois</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={woods}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>Porter, Indiana</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={birdhouse}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption>
                        <h3>Evanston, Illinois</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={chicago}
                        alt="Seventh slide"
                    />
                    <Carousel.Caption>
                        <h3>Chicago, Illinois</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={sedona}
                        alt="Eight slide"
                    />
                    <Carousel.Caption>
                        <h3>Sedona, Arizona</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        height={500}
                        width={700}
                        src={starvedrock}
                        alt="Ninth Slide" 
                    />
                    <Carousel.Caption>
                        <h3>Oglesby, Illinois</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}

export default Carousels;