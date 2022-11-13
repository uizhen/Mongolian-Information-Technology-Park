import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    center: false,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
}

const HighPerformanceSolutions = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="performance-area ptb-100">
			<div className="container">
				<div className="section-title white-title">
					<h2>High-Performance Solutions</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
                    {display ? <OwlCarousel 
                        className="single-security-wrap owl-carousel owl-theme"
                        {...options}
                    > 
						<div className="single-security">
							<i className="flaticon-website"></i>
							<h3>Confidential Information</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                            <Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Mobile Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					
						<div className="single-security">
							<i className="flaticon-content"></i>
							<h3>Website Protection</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					
						<div className="single-security">
							<i className="flaticon-cyber"></i>
							<h3>Hacking Protection</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>

						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Mobile Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
                    </OwlCarousel> : ''}
				</div>
			</div>
		</section>
    )
}

export default HighPerformanceSolutions;