import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-area-wrap">
                <div className="new-main-banner-wrap-item">
                    <div className="container-fluid">
                        <div className="new-main-banner-wrap-content">
                            <h1>Protect Your Data In A More Effective Way Now</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eledictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl aenean turpis pretium.</p>
        
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
                </div>
            </div>
        </>
    )
}

export default MainBanner;