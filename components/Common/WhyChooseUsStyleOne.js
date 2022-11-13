import React from 'react';
import Link from 'next/link';

const WhyChooseUsStyleOne = () => {
    return (
        <div className="choose-area ptb-100">
			<div className="container">
				<div className="choose-wrap">
					<h2>Why Choose Us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

					<ul>
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
                        <a className="default-btn mt-30">
                            Know Details
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default WhyChooseUsStyleOne;