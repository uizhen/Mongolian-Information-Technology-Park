import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area bg-color-f9f9f9 ptb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="partner-slider-six owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="partner-item">
                        <a href="#" target="_blank">
                            <img src="/img/home-six/partner/partner-1.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="#" target="_blank">
                            <img src="/img/home-six/partner/partner-2.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <a href="#" target="_blank">
                            <img src="/img/home-six/partner/partner-3.png" alt="Image" />
                        </a>
                    </div>
                    
                    <div className="partner-item">
                        <a href="#" target="_blank">
                            <img src="/img/home-six/partner/partner-4.png" alt="Image" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Partners;