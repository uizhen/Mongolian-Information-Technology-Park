import React from 'react';
import Link from 'next/link';

const HighPerformanceSolutions = () => {
    return (
        <section className="solutions-area pb-70">
			<div className="container">
				<div className="section-title">
					<h2>High-Performance Solutions</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
					<div className="col-lg-5">
						<div className="single-solutions solutions-time-bg-1">
							<div className="solutions-content">
								<h3>Secure Managed IT</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-2">
									<div className="solutions-content">
										<h3>Compliance</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-3">
									<div className="solutions-content">
										<h3>Cyber Security</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-4">
									<div className="solutions-content">
										<h3>Disaster Planning</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-5">
									<div className="solutions-content">
										<h3>Secure By Design</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="single-solutions solutions-time-bg-6">
							<div className="solutions-content">
								<h3>Secure Awareness Training</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default HighPerformanceSolutions;