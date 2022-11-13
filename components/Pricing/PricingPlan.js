import React from 'react';
import Link from 'next/link';

const PricingPlan = () => {
    return (
        <section className="pricing-area">
			<div className="container">
				<div className="section-title">
					<h2>Buy Our Plans & Packages</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-pricing">
							<div className="pricing-content">
								<h3>One Time</h3>
								<h2>Free</h2>
							</div>

							<ul>
								<li>
									<i className="bx bx-check"></i>
									The Departure Of The Expect
								</li>
								<li>
									<i className="bx bx-check"></i>
									Remote Administrator
								</li>
								<li>
									<i className="bx bx-check"></i>
									Configure Software
								</li>
								<li>
									<span>
										<i className="bx bx-x"></i>
										Special Application
									</span>
								</li>
								<li>
									<span>
										<i className="bx bx-x"></i>
										24/7 Support
									</span>
								</li>
							</ul>

                            <Link href="/contact">
                                <a className="default-btn">Order Now</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-pricing active">
							<div className="pricing-content">
								<h3>Business</h3>
								<h2>$70 <sub>/ per month</sub></h2>
							</div>

							<ul>
								<li>
									<i className="bx bx-check"></i>
									The Departure Of The Expect
								</li>
								<li>
									<i className="bx bx-check"></i>
									Remote Administrator
								</li>
								<li>
									<i className="bx bx-check"></i>
									Configure Software
								</li>
								<li>
									<i className="bx bx-check"></i>
									Special Application
								</li>
								<li>
									<span>
										<i className="bx bx-x"></i>
										24/7 Support
									</span>
								</li>
							</ul>

							<Link href="/contact">
                                <a className="default-btn">Order Now</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-pricing">
							<div className="pricing-content">
								<h3>Exclusive</h3>
								<h2>$120 <sub>/ per month</sub></h2>
							</div>

							<ul>
								<li>
									<i className="bx bx-check"></i>
									The Departure Of The Expect
								</li>
								<li>
									<i className="bx bx-check"></i>
									Remote Administrator
								</li>
								<li>
									<i className="bx bx-check"></i>
									Configure Software
								</li>
								<li>
									<i className="bx bx-check"></i>
									Special Application
								</li>
								<li>
									<i className="bx bx-check"></i>
									24/7 Support
								</li>
							</ul>

							<Link href="/contact">
                                <a className="default-btn">Order Now</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default PricingPlan;