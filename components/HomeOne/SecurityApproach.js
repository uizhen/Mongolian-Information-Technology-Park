import React from 'react';

const SecurityApproach = () => {
    return (
        <section className="approach-area pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="approach-img">
							<img src="/img/approach-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="approach-content">
							<h2>Our Approach To Security</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p>

							<ul>
								<li>
									<i className="flaticon-cyber"></i>
									<h3>Secure by Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li>
								<li>
									<i className="flaticon-cyber-security"></i>
									<h3>Compliant by Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li>
								<li>
									<i className="flaticon-profile"></i>
									<h3>Continuous Monitoring</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default SecurityApproach;