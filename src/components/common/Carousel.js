import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <LazyLoadImage alt="Banner-1" src="/images/carousel-1.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <LazyLoadImage alt="Banner-2" src="/images/carousel-2.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <LazyLoadImage alt="Banner-3" src="/images/carousel-3.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <LazyLoadImage  alt="Banner-4" src="/images/carousel-4.png" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <LazyLoadImage alt="Banner-5" src="/images/carousel-5.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <LazyLoadImage alt="Banner-6" src="/images/carousel-6.jpg" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
