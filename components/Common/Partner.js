import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 0,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:3,
            margin: 30,
        },
        576:{
            items:3,
            margin: 30,
        },
        768:{
            items: 5,
            margin: 30,
        }
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="partner-area ptb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="partner-wrap owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-item">
                        <img src="/img/partners/partner1.png" alt="Image" />
                        
                        <a className="partner-overly" href="https://crc.gov.mn/" target="_blank">
                            <img src="/img/partners/hover-partner1.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/partner2.png" alt="Image" />
                        <a className="partner-overly" href="https://e-mongolia.mn/home" target="_blank">
                            <img src="/img/partners/hover-partner2.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/partner3.png" alt="Image" />
                        <a className="partner-overly" href="https://mddc.gov.mn/" target="_blank">
                            <img src="/img/partners/hover-partner3.png" alt="Image" />
                        </a>
                    </div>
                    
                    <div className="partner-item">
                        <img src="/img/partners/partner4.png" alt="Image" />
                        <a className="partner-overly" href="https://www.mongolpost.mn/" target="_blank">
                            <img src="/img/partners/hover-partner4.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/partner5.png" alt="Image" />
                        <a className="partner-overly" href="http://www.telecommongolia.mn/" target="_blank">
                            <img src="/img/partners/hover-partner5.png" alt="Image" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Partner;