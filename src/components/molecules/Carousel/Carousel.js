import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.scss";
import { Carousel1, Carousel2, Carousel3 } from '../../../assets/assets';

const ComponentCarousel = () => {
    return (
        <Carousel className="carousel-main" 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop={true}
        autoPlay={true}
        >
            <div>
                <img className="img-carousel" src={Carousel1} alt="a" />
            </div>
            <div>
                <img className="img-carousel" src={Carousel2} alt="a" />
            </div>
            <div>
                <img className="img-carousel" src={Carousel3} alt="a" />
            </div>
        </Carousel>
    )
}

export default ComponentCarousel;
