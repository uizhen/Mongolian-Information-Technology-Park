import React from 'react';
import Link from 'next/link';

const WhyChooseUsStyleTwo = () => {
    return (
        <section className="choose-area-four ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="choose-img">
							<img src="/img/choose-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="choose-wrap p-0">
							<h2>Why Choose Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
		
							<ul className="mt-30">
								<li>
									<i className="bx bx-check"></i>
									Extemly low response  time at all time
								</li>
								<li>
									<i className="bx bx-check"></i>
									We are always ready for your growth
								</li>
								<li>
									<i className="bx bx-check"></i>
									We understand security and compliance
								</li>
							</ul>

                            <Link href="/about">
                                <a className="default-btn mt-30">Know Details</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default WhyChooseUsStyleTwo;