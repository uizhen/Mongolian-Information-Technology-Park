import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="new-main-banner-area-with-black-color">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-black-content">
                                <h1>We Help To Protect Modern Information From Hackers</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit, dui nisl. aenean turpis ut pretium et dictum dolor quis consect etur feugiat odio luctus a nibh sed sit fames ac at tincidunt quam vita.</p>
            
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
                        <div className="col-lg-6 col-md-12">
                            <div className="new-main-banner-black-image">
                                <img src="/img/home-7-8-9/banner/black-banner.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="new-main-banner-black-shape">
                    <img src="/img/home-7-8-9/banner/line-bg.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;