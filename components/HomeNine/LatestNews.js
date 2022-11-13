import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 25,
    nav: true,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive:{
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        768:{
            items: 2,
        },
        992:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    }
};

const LatestNews = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="latest-news-area pb-75">
                <div className='container'>
                    <div className="section-title">
                        <h2>Latest News From Blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                    </div>
                </div>
                <div className="container-fluid">
                    {display ? <OwlCarousel 
                        className="latest-news-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-1.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Being The Best-selling Smartphone In This Year</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-2.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Security In A Fragment World Of Workload</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-3.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Dhs Issues Emergency Directive To Prevent Hacking Attack</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-4.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Drughydrus  Add Google Drive To Roughrobin Torjan</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-1.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Being The Best-selling Smartphone In This Year</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-2.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Security In A Fragment World Of Workload</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-3.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Dhs Issues Emergency Directive To Prevent Hacking Attack</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="latest-news-card white-color-content">
                            <div className="news-image">
                                <Link href="/blog-details">
                                    <a><img src="/img/home-7-8-9/latest-news/news-4.jpg" alt="image" /></a>
                                </Link>
                            </div>
                            <div className="news-content">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Drughydrus  Add Google Drive To Roughrobin Torjan</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet delectir consecte adipiscing elit.</p>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default LatestNews;