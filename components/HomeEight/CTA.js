import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <>
            <div className="overview-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="overview-content-box">
                                <img src="/img/home-7-8-9/overview/overview-1.jpg" alt="image" />

                                <div className="content">
                                    <h3>Provide The Best Solution By Our Expert</h3>
                                    <Link href="/contact"> 
                                        <a className="default-btn">Contact Us</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="overview-content-box">
                                <img src="/img/home-7-8-9/overview/overview-2.jpg" alt="image" />

                                <div className="content">
                                    <h3>Our Recent Digital & Strategy Services</h3>
                                    <Link href="/services-one">
                                        <a className="default-btn">View All Services</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA;