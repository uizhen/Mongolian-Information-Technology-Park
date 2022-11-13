import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="banner-area banner-area-three jarallax">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="banner-text">
							<span>All Research up to Blockchain Interoperability is completed</span>
							<h1>Cyber Security Is Not Optional</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>

							<div className="banner-btn">
								<Link href="#">
									<a className="default-btn">Booking Now</a>
								</Link>
								<Link href="/about">
									<a className="default-btn active">About Us</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="follow-us">
				<ul>
					<li>
						<span>Follow Us On Facebook</span>
					</li>
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
						<a href="https://www.twitter.com/" target="_blank">
							<i className="bx bxl-twitter"></i>
						</a>
					</li>
				</ul>
			</div>
			
			{/* Shape Images */}
			<div className="banner-shape-1">
				<img src="/img/home-three/home3-shape1.png" alt="Image" />
			</div>
			<div className="banner-shape-2">
				<img src="/img/home-three/home3-shape2.png" alt="Image" />
			</div>
			<div className="banner-shape-3">
				<img src="/img/home-three/home3-shape3.png" alt="Image" />
			</div>
		</div>
    )
}

export default MainBanner;