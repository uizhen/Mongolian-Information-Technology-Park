import React from 'react';

const FeaturesCard = () => {
    return (
        <section className="features-area-page pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-features">
							<h3><i className="bx bx-check-shield"></i> Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							<span className="bx bx-check-shield"></span>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-features">
							<h3><i className="bx bx-lock"></i> Privacy</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							<span className="bx bx-lock"></span>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-features">
							<h3><i className="bx bx-certification"></i> Industry Certified</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							<span className="bx bx-certification"></span>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default FeaturesCard;