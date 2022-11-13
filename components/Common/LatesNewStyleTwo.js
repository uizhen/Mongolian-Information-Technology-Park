import React from 'react';
import Link from 'next/link';

const LatesNewStyleTwo = () => {
    return (
        <section className="blog-area pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Latest News From Blog</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-blog">
							<img src="/img/blog/blog1.jpg" alt="Image" />

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
							<img src="/img/blog/blog2.jpg" alt="Image" />
							<span>Cyber Crime</span>

							<div className="blog-content">
								<div className="date">
									<i className="bx bx-calendar"></i>
									Jun 21 2020
								</div>

								<h3>
                                    <Link href="/blog-details">
                                        <a>Drughydrus add google drive to roughrobin torjan</a>
                                    </Link>
								</h3>
					 	
                                <Link href="/blog-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-blog">
							<img src="/img/blog/blog3.jpg" alt="Image" />
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
				</div>
			</div>
		</section>
    )
}

export default LatesNewStyleTwo;