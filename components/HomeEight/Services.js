import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 25,
    nav: true,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive:{
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        992:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    }
};

const Services = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="complete-website-security-area ptb-100">
                <div className="container">
                    <div className="section-title-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <h2>Our Included Service</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="wrap-btn">
                                    <Link href="/services-one">
                                        <a className="default-btn">View All Services</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {display ? <OwlCarousel 
                        className="complete-website-security-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-bug"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Malware Detection Removal</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>	

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-content"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Content Delivery Network</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>	

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-support"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>24/7 Cyber Security Support</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-profile"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Managed Web Application</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-bug"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Malware Detection Removal</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>	

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-content"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Content Delivery Network</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>	

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-support"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>24/7 Cyber Security Support</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>

                        <div className="complete-website-security-card with-white-color">
                            <div className="icon">
                                <i className="flaticon-profile"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Managed Web Application</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adiing eleifend dictum pot nti.</p>
                            <div className="security-shape">
                                <img src="/img/home-7-8-9/website-security/security-shape-2.png" alt="image" />
                            </div>
                        </div>
                    </OwlCarousel> : ''}

                </div>

                <div className="website-security-shape">
                    <img src="/img/home-7-8-9/website-security/security-shape-1.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default Services;