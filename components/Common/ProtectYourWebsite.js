import React from 'react';
import Link from 'next/link';

const ProtectYourWebsite = () => {
    return (
        <div className="manual-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="manual-img">
							<img src="/img/manual-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="manual-content mr-auto ml-0">
							<h2>How to Protect Your Website: The Manual Way</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

							<div className="row">
								<div className="col-lg-6 col-sm-6">
									<ul className="cybersecurity-item">
										<li>
											<i className="bx bx-check"></i>
											Managed Web Application
										</li>
										<li>
											<i className="bx bx-check"></i>
											SIEM Threat Detection
										</li>
										<li>
											<i className="bx bx-check"></i>
											Content Delivery Network
										</li>
										<li>
											<i className="bx bx-check"></i>
											Website Hack Repair
										</li>
									</ul>
								</div>

								<div className="col-lg-6 col-sm-6">
									<ul>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
									</ul>
								</div>
							</div>

                            <Link href="/service-details">
                                <a className="default-btn mt-30">
                                    Know Details
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ProtectYourWebsite;