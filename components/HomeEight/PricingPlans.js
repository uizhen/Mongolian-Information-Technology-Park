import React from 'react';
import Link from 'next/link';

const PricingPlans = () => {
    return (
        <>
            <div className="pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <h2>Buy Our Plans & Packages Monthly</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-plans-card">
                                <div className="pricing-header">
                                    <h3>Free</h3>
                                    <p>Best for individual</p>
                                </div>
                                <div className="price">
                                    <h4>Free<span>/month</span></h4>
                                </div>
                                <div className="features-list">
                                    <h5>ALL FEATURES:</h5>
                                    <ul>
                                        <li><i className='bx bx-check-circle'></i> The Departure Of The Expect</li>
                                        <li><i className='bx bx-check-circle'></i> Remote Administrator</li>
                                        <li><i className='bx bx-check-circle'></i> Configure Software</li>
                                        <li><i className='bx bx-check-circle'></i> Special Application</li>
                                        <li className="bg-C4C4C4"><i className='bx bx-check-circle'></i> 24/7 Support </li>
                                        <li className="bg-C4C4C4"><i className='bx bx-check-circle'></i> Password Protection</li>
                                    </ul>
                                </div>

                                <Link href="/contact">
                                    <a className="link-btn">Get Started</a>
                                </Link>

                                <div className="plans-shape">
                                    <img src="/img/home-7-8-9/plans/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-plans-card">
                                <div className="pricing-header">
                                    <h3>Starter</h3>
                                    <p>Best for Team</p>
                                </div>
                                <div className="price">
                                    <h4>$49<span>/month</span></h4>
                                </div>
                                <div className="features-list">
                                    <h5>ALL FEATURES:</h5>
                                    <ul>
                                        <li><i className='bx bx-check-circle'></i> The Departure Of The Expect</li>
                                        <li><i className='bx bx-check-circle'></i> Remote Administrator</li>
                                        <li><i className='bx bx-check-circle'></i> Configure Software</li>
                                        <li><i className='bx bx-check-circle'></i> Special Application</li>
                                        <li><i className='bx bx-check-circle'></i> 24/7 Support </li>
                                        <li className="bg-C4C4C4"><i className='bx bx-check-circle'></i> Password Protection</li>
                                    </ul>
                                </div>
                                
                                <Link href="/contact">
                                    <a className="link-btn">Get Started</a>
                                </Link>

                                <div className="plans-shape">
                                    <img src="/img/home-7-8-9/plans/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-plans-card">
                                <div className="pricing-header">
                                    <h3>Exclusive</h3>
                                    <p>Best for Company</p>
                                </div>
                                <div className="price">
                                    <h4>$100<span>/month</span></h4>
                                </div>
                                <div className="features-list">
                                    <h5>ALL FEATURES:</h5>
                                    <ul>
                                        <li><i className='bx bx-check-circle'></i> The Departure Of The Expect</li>
                                        <li><i className='bx bx-check-circle'></i> Remote Administrator</li>
                                        <li><i className='bx bx-check-circle'></i> Configure Software</li>
                                        <li><i className='bx bx-check-circle'></i> Special Application</li>
                                        <li><i className='bx bx-check-circle'></i> 24/7 Support </li>
                                        <li><i className='bx bx-check-circle'></i> Password Protection</li>
                                    </ul>
                                </div>
                                
                                <Link href="/contact">
                                    <a className="link-btn">Get Started</a>
                                </Link>
                                
                                <div className="plans-shape">
                                    <img src="/img/home-7-8-9/plans/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPlans;