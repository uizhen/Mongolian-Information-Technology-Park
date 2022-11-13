import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin:0,
    nav: true,
    mouseDrag: false,
    items: 1,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>",
    ],
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="new-main-banner-area">
                {display ? <OwlCarousel 
                    className="new-main-home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="new-main-banner-slides-item">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <div className="new-main-banner-content">
                                        <span>All Research Up to Blockchain Interoperability is Completed!</span>
                                        <h1>Protect Your data In A More Effective Way</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl. aenean turpis ut pretium et dictum dolor quis consect etur feugiat odio luctus a nibh sed sit fames ac at tincidunt quam vita.</p>
            
                                        <ul className="banner-btn">
                                            <li>
                                                <Link href="/contact">
                                                    <a className="default-btn">Request Free Access</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a className="default-btn color-two">Get Started Now</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7 col-md-12">
                                    <div className="new-main-banner-image"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="new-main-banner-slides-item">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <div className="new-main-banner-content">
                                        <span>All Research Up to Blockchain Interoperability is Completed!</span>
                                        <h1>We Help To Protect Modern Information From Hackers</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl. aenean turpis ut pretium et dictum dolor quis consect etur feugiat odio luctus a nibh sed sit fames ac at tincidunt quam vita.</p>
            
                                        <ul className="banner-btn">
                                            <li>
                                                <Link href="/contact">
                                                    <a className="default-btn">Request Free Access</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a className="default-btn color-two">Get Started Now</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7 col-md-12">
                                    <div className="new-main-banner-image image-two"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="new-main-banner-shape">
                    <img src="/img/home-7-8-9/banner/shape.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;