import React from 'react';
import Link from 'next/link';

const LatestNews = () => {
    return (
        <div className="blog-area pb-70">
            <div className="container">
                <div className="section-title-six">
                    <span>Latest News</span>
                    <h2>Our Latest Insights Are On Top</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-post">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/home-six/blog/blog-1.jpg" alt="Image" />
                                </a>
                            </Link>

                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="bx bx-purchase-tag"></i>
                                        Security
                                    </li>
                                    <li>
                                        <i className="bx bx-time"></i>
                                        5 min read
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>DHS Issues Emergency Directive To Prevent Hacking Attack</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-post">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/home-six/blog/blog-2.jpg" alt="Image" />
                                </a>
                            </Link>

                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="bx bx-purchase-tag"></i>
                                        Hunter
                                    </li>
                                    <li>
                                        <i className="bx bx-time"></i>
                                        5 min read
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Drughydrus Add Google Drive To Roughrobin Torjan</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                        <div className="single-blog-post">
                            <Link href="/blog-details">
                                <a>
                                    <img src="/img/home-six/blog/blog-3.jpg" alt="Image" />
                                </a>
                            </Link>

                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="bx bx-purchase-tag"></i>
                                        Hacker
                                    </li>
                                    <li>
                                        <i className="bx bx-time"></i>
                                        5 min read
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Security In A Fragment World Of Workload For Your Business</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews;