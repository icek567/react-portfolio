import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import flower from "./flower.jpg";
import river from "./river.jpg";
import chivas from "./chivas.JPG";
import night from "./night.JPG";
import woods from "./woods.jpg";
import birdhouse from "./birdhouse.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Contact() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    height={500}
                    width={700}
                    src={flower}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="information" >First slide label</h3>
                    <p className="information" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={500}
                    width={700}
                    src={chivas}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    height={500}
                    width={700}
                    src={night}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    height={500}
                    width={700}
                    src={woods}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    height={500}
                    width={700}
                    src={birdhouse}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Sixth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Contact;