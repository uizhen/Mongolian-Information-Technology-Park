import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Features from './Features';

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <section className="banner-area banner-item-bg-1 jarallax">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="banner-text">
                                <span>All Research up to Blockchain Interoperability is completed</span>
                                <h1>Modern Information Protect from Hackers</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>

                                <div className="banner-btn">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Booking Now
                                        </a>
                                    </Link>
                                    <Link href="/about">
                                        <a className="default-btn active">
                                            About Us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="video-btn-animat one">
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="bx bx-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* Features */}
                <Features />
                
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </section>
        </>
    )
}

export default MainBanner;