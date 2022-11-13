import React from 'react';
import Link from 'next/link';

const WeCreateVirtualWorld = () => {
    return (
        <>
            <div className="safer-world-area-without-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="safer-world-image">
                                <img src="/img/home-7-8-9/safer-world/safer-world-2.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="safer-world-content white-color-content">
                                <h3>We create a safer Virtual World For Your future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra. Eget quam lacus enim porttitor bibendum elit dui nisl.</p>

                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="safer-world-inner-box">
                                            <h4>Our Mission</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="safer-world-inner-box">
                                            <h4>Our Mission</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="safer-world-btn">
                                    <Link href="/about">
                                        <a className="default-btn">Know More About Us</a>
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

export default WeCreateVirtualWorld;