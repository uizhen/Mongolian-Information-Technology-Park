import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop: true,
    margin: 30,
    nav: true,
    mouseDrag: true,
    items:1,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>",
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area bg-color-f9f9f9 pt-100 pb-70">
			<div className="container">
				<div className="section-title-six">
					<span>Testimonials</span>
					<h2>What Customers Say About Us</h2>
				</div>

				<div className="testimonials">
                    {display ? <OwlCarousel 
                        className="testimonials-slider owl-carousel owl-theme"
                        {...options}
                    > 
						<div className="testimonials-item">
							<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverramaecenas accumsan lacus vel facilisis.”</p> 

							<div className="testimonials-view">
								<img src="/img/home-six/testimonials/testimonials-1.jpg" alt="Image" />
								<h3>Jason Doe</h3>
								<span>Web Developer</span>
							</div>
						</div>

						<div className="testimonials-item">
							<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverramaecenas accumsan lacus vel facilisis.”</p> 

							<div className="testimonials-view">
								<img src="/img/home-six/testimonials/testimonials-2.jpg" alt="Image" />
								<h3>Alex Dew</h3>
								<span>Web Designer</span>
							</div>
						</div>
					</OwlCarousel> : ''}

					<i className='quote bx bxs-quote-alt-right'></i>
				</div>
			</div>
		</div>
    )
}

export default Testimonials;