import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 25,
    nav: false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
        },
        576:{
            items: 1,
        },
        768:{
            items: 2,
        },
        992:{
            items: 3,
        },
        1200:{
            items: 3,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="testimonials-wrap-area ptb-100">
                <div className="container">
                    <div className="section-title white-title">
                        <h2>What Client’s Say About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                    </div>

                    {display ? <OwlCarousel 
                        className="testimonials-wrap-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Patric Watler</h3>
                                <span>Manager</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Jane Anderson</h3>
                                <span>Developer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Victor James</h3>
                                <span>Designer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Patric Watler</h3>
                                <span>Manager</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Jane Anderson</h3>
                                <span>Developer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Victor James</h3>
                                <span>designer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Patric Watler</h3>
                                <span>Manager</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>
                        
                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Jane Anderson</h3>
                                <span>Developer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="single-testimonials-card">
                            <p>Lorem ipsum dolor amet consectet adipiscing elit adipiscing eleifend dicturi me pot nti mattis viverra.</p>
                            <div className="client-info">
                                <h3>Victor James</h3>
                                <span>Designer</span>
                            </div>
                            <ul className="rating">
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>
                            <div className="quote-shape">
                                <img src="/img/home-7-8-9/testimonials/shape.png" alt="image" />
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default Testimonials;