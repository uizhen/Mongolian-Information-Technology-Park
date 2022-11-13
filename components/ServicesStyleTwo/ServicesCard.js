import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <section className="performance-area bg-none pb-100">
			<div className="container">
				<div className="section-title">
					<h2>High-Performance Solutions</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-website"></i>
							<h3>Confidential Information</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Mobile Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-content"></i>
							<h3>Website Protection</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>
					
					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-cyber"></i>
							<h3>Hacking Protection</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Mobile Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Mobile Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
	
							<Link href="/service-details">
                                <a className="read-more">Read More</a>
                            </Link>
							<img src="/img/shape/shape4.png" alt="Image" />
						</div>
					</div>

					{/* Pagination */}
					<div className="col-lg-12">
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
					</div>
				</div>
			</div>
		</section>
    )
}

export default ServicesCard;