import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <div className="complete-website-security-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <h2>You Get Complete Website Security From Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="complete-website-security-card mb-25">
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
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="complete-website-security-card mb-25">
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
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="complete-website-security-card mb-25">
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
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="complete-website-security-card mb-25">
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
                        </div>
                    </div>
                </div>

                <div className="website-security-shape">
                    <img src="/img/home-7-8-9/website-security/security-shape-1.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default Services;