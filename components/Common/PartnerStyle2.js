import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    margin: 30,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const PartnerStyle2 = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="partner-style-two-area pb-100">
                <div className="container">
                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item-card">
                            <a href="#" target="_blank" className="d-inline-block">
                                <img src="/img/home-7-8-9/partner/partner1.svg" alt="partner" />
                            </a>
                        </div>
                        <div className="partner-item-card">
                            <a href="#" target="_blank" className="d-inline-block">
                                <img src="/img/home-7-8-9/partner/partner2.svg" alt="partner" />
                            </a>
                        </div>
                        <div className="partner-item-card">
                            <a href="#" target="_blank" className="d-inline-block">
                                <img src="/img/home-7-8-9/partner/partner3.svg" alt="partner" />
                            </a>
                        </div>
                        <div className="partner-item-card">
                            <a href="#" target="_blank" className="d-inline-block">
                                <img src="/img/home-7-8-9/partner/partner4.svg" alt="partner" />
                            </a>
                        </div>
                        <div className="partner-item-card">
                            <a href="#" target="_blank" className="d-inline-block">
                                <img src="/img/home-7-8-9/partner/partner5.svg" alt="partner" />
                            </a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default PartnerStyle2;