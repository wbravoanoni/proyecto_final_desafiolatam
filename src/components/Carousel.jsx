import React from "react";

import slide1 from '../assets/images/motocross-2549359_1280.jpg';


const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2017/07/28/17/54/motocross-2549359_1280.jpg" className="d-block w-100" alt="Slide 1" style={{ objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/97166726/photo/seat-grab-indian-air.jpg?s=2048x2048&w=is&k=20&c=mssvDxSiF971Avjv4Cw3eFdVOBM8QEPwa2RRIGddU5A=" className="d-block w-100" alt="Slide 2" style={{ objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/157186029/photo/upside-down-jump.jpg?s=2048x2048&w=is&k=20&c=L1sqHx3_9aVPumSBdXsfnaiqSXpu9hJ1sw2F-8jR9hE=" className="d-block w-100" alt="Slide 3" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
    };

    export default Carousel;