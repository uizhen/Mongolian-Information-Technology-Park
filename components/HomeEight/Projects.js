import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,

    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
};

const Projects = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="success-projects-area pt-100 pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="success-projects-section-content">
                                <h3>See Our Numerous Success Project From Previous</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing eleifend dictum potenti mattis viverra eget quam lacus enim porttitor bibendum elit dui nisl.</p>
                                <a href="#" className="default-btn">View All Project</a>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            {display ? <OwlCarousel 
                                className="success-projects-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-1.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Cyber Security</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-2.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Incident Responder</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-3.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Secure Managed IT</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-1.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Cyber Security</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-2.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Incident Responder</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-3.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Secure Managed IT</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-1.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Cyber Security</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-2.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Incident Responder</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>

                                <div className="single-success-projects-card">
                                    <div className="projects-image">
                                        <Link href="/project-details">
                                            <a><img src="/img/home-7-8-9/projects/projects-3.jpg" alt="image" /></a>
                                        </Link>
        
                                        <div className="icon">
                                            <Link href="/project-details">
                                                <a><i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Secure Managed IT</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;