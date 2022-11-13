import React from 'react';
import Link from 'next/link';

const FooterTwo = () => {
	const currentYear = new Date().getFullYear();
    return (
		<>
			<footer className="footer-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<Link href="/">
									<a className="logo">
										<img src="/img/logo-black.png" alt="Image" />
									</a>
								</Link>

								<p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consec tetur</p>

								<ul className="social-icon">
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank">
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank">
											<i className="bx bxl-linkedin-square"></i>
										</a>
									</li>
									<li>
										<a href="https://www.twitter.com/" target="_blank">
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Help</h3>

								<ul className="import-link">
									<li>
										<Link href="/privacy-policy">
											<a>Privacy Policy</a>
										</Link>
									</li>
									<li>
										<a href="#">Return Policy</a>
									</li>
									<li>
										<Link href="/terms-conditions">
											<a>Termas & Conditions</a>
										</Link>
									</li>
									<li>
										<Link href="/about">
											<a>About Us</a>
										</Link>
									</li>
									<li>
										<Link href="/about">
											<a>Careers</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Services Link</h3>

								<ul className="import-link">
									<li>
										<Link href="/service-details">
											<a>Threat Hunter</a>
										</Link>
									</li>
									<li>
										<Link href="/service-details">
											<a>Incident Responder</a>
										</Link>
									</li>
									<li>
										<Link href="/service-details">
											<a>Secure Managed IT</a>
										</Link>
									</li>
									<li>
										<Link href="/service-details">
											<a>Compliance</a>
										</Link>
									</li>
									<li>
										<Link href="/service-details">
											<a>Cyber Security</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="single-footer-widget">
								<h3>Contacts</h3>

								<ul className="address">
									<li className="location">
										<span>Address:</span>
										2750 Quadra Street Victoria, Canada.
									</li>
									<li>
										<span>Email:</span>
										<a href="mailto:hello@pisa.com">hello@pisa.com</a>
									</li>
									<li>
										<span>Phone:</span>
										<a href="tel:+44-587-154756">+44 587 154756</a>
									</li>
									<li>
										<span>Fax:</span>
										<a href="tel:+44-785-4578964">+44 785 4578964</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="copy-right-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<p>
								Copyright <i className="bx bx-copyright"></i>{currentYear} Pisa. Designed By <a href="https://envytheme.com/" target="blank">EnvyTheme</a>
							</p>
						</div>

						<div className="col-lg-6 col-md-6">
							<ul className="footer-menu">
								<li>
									<Link href="/privacy-policy">
										<a target="_blank">
											Privacy Policy 
										</a>
									</Link>
								</li>
								<li>
									<Link href="/terms-conditions">
										<a target="_blank">
											Terms & Conditions
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

export default FooterTwo;