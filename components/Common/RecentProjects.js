import React from 'react';
import Link from 'next/link';
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

const RecentProjects = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="project-area pb-100">
			<div className="container-fluid">
				<div className="section-title">
					<h2>Seku Recent Project Case</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
                    {display ? <OwlCarousel 
                        className="solutions-wrap owl-carousel owl-theme"
                        {...options}
                    >
						<div className="single-solutions solutions-time-bg-7">
							<div className="solutions-content">
								<h3>Hacking Parotection Software</h3>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, obcaecati praesentium. Labore sint recusandae perspiciatis laudantium, deleniti non</p>

                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					
						<div className="single-solutions solutions-time-bg-8">
							<div className="solutions-content">
								<h3>Security Awarness Training</h3>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, obcaecati praesentium. Labore sint recusandae perspiciatis laudantium, deleniti non</p>
								
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					
						<div className="single-solutions solutions-time-bg-9">
							<div className="solutions-content">
								<h3>Cyber Security Manged IT</h3>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, obcaecati praesentium. Labore sint recusandae perspiciatis laudantium, deleniti non</p>
								
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
                    </OwlCarousel> : ''}
				</div>
			</div>
		</section>
    )
}

export default RecentProjects;