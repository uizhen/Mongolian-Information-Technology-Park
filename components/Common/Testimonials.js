import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="client-area ptb-100">
            <div className="container">
                <div className="section-title white-title">
					<h2>What Client’s Say About Us</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

                {display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client1.jpg" alt="Image" />
                            <h3>Alen Meair</h3>
                            <span>Developer</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client2.jpg" alt="Image" />
                            <h3>Axon Detos</h3>
                            <span>CEO</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client3.jpg" alt="Image" />
                            <h3>John Dona</h3>
                            <span>Designer</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>
                        
                        <div className="client-img">
                            <img src="/img/client-img/client4.jpg" alt="Image" />
                            <h3>Jon Smith</h3>
                            <span>Developer</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </section>
    )
}

export default Testimonials;