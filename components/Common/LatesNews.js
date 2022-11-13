import React from 'react';
import Link from 'next/link';

const LatesNews = () => {
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

							<div className="blog-content">
								<h3>
                                    <Link href="/blog-details">
									    <a>Secure Managed IT</a>
                                    </Link>
								</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>

                                <Link href="/blog-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-blog">
							<img src="/img/blog/blog2.jpg" alt="Image" />

							<div className="blog-content">
								<h3>
                                    <Link href="/blog-details">
                                        <a>Cloud Security</a>
                                    </Link>
								</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
								
                                <Link href="/blog-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-blog">
							<img src="/img/blog/blog3.jpg" alt="Image" />

							<div className="blog-content">
								<h3>
                                    <Link href="/blog-details">
                                        <a>Secure Managed Web</a>
                                    </Link>
								</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
								
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

export default LatesNews;