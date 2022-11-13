import React from 'react';

const Features = () => {
    return (
        <div className="features-area pb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6 p-0">
						<div className="single-features">
							<h3><i className="bx bx-check-shield"></i> Security</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 p-0">
						<div className="single-features">
							<h3><i className="bx bx-lock"></i> Privacy</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
						<div className="single-features mb-0">
							<h3><i className="bx bx-certification"></i> Industry Certified</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;