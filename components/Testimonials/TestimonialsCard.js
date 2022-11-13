import React from 'react';
import Link from 'next/link';

const TestimonialsCard = () => {
    return (
        <div className="client-area-page ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>What Client’s Say About Us</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
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
					</div>

					<div className="col-lg-4 col-sm-6">
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
					</div>

					<div className="col-lg-4 col-sm-6">
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
					</div>

					<div className="col-lg-4 col-sm-6">
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
								<h3>Anna Smith</h3>
								<span>Developer</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
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
                                <img src="/img/client-img/client5.jpg" alt="Image" />
								<h3>Alien Dew</h3>
								<span>Manager</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
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
                                <img src="/img/client-img/client6.jpg" alt="Image" />
								<h3>Jon Smith</h3>
								<span>Reviewer</span>
							</div>
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
		</div>
    )
}

export default TestimonialsCard;