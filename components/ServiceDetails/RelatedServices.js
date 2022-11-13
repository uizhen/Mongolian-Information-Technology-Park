import React from 'react';
import Link from 'next/link';

const RelatedServices = () => {
    return (
        <>
            <h3 className="services-related-post">Related Post</h3>
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <div className="single-solutions solutions-time-bg-1 mb-0 mb-ud">
                        <div className="solutions-content">
                            <h3>Secure Managed IT</h3>
                            <p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>

                            <Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                    <div className="single-solutions solutions-time-bg-2 mb-0">
                        <div className="solutions-content">
                            <h3>Compliance</h3>
                            <p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                            
                            <Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedServices;