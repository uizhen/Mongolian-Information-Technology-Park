import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const BlogGrid = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Сургалтууд" 
                homePageUrl="/" 
                homePageText="Нүүр" 
                activePageText="Сургалтууд" 
            /> 

            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Манай сургалтууд</h2>
                        <p>Монгол улсын хэмжээнд бүрэн төгс хүчинтэй сургалтыг мэргэжлийн багш нар заах бөгөөд таны суралцсан сургалтын гэрчилгээ Монгол
                            улсын мэдээллийн санд хадгалагдан таны ажил мэргэжлийн нэрийн хуудас болон явах юм.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog1.jpg" alt="Image" />

                                <div className="blog-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Secure Managed IT</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>

                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog2.jpg" alt="Image" />

                                <div className="blog-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Cloud Security</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog3.jpg" alt="Image" />

                                <div className="blog-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Secure Managed IT</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog4.jpg" alt="Image" />

                                <span>Cyber Security</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 20 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>DHS issues emergency directive to prevent hacking attack</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog5.jpg" alt="Image" />

                                <span>Cyber Crime</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 21 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Drughydrus  add google drive to roughrobin torjan</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog6.jpg" alt="Image" />

                                <span>Hacking Protection</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 22 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Security in a fragment world of workload</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog6.jpg" alt="Image" />

                                <span>Hacking Protection</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 22 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Security in a fragment world of workload</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog6.jpg" alt="Image" />

                                <span>Hacking Protection</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 22 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Security in a fragment world of workload</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <img src="/img/blog/blog6.jpg" alt="Image" />

                                <span>Hacking Protection</span>
                                <div className="blog-content">
                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        Jun 22 2020
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Security in a fragment world of workload</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        {/* <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link page-links">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link href="#">
                                            <a className="page-link">1</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">2</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">3</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">
                                                <i className='bx bx-chevrons-right'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default BlogGrid;