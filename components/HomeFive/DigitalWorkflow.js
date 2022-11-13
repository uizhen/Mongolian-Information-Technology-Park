import React from 'react';

const DigitalWorkflow = () => {
    return (
        <section className="transform-area-five pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 pr-0">
						<div className="transform-img">
							<img src="/img/transform-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6 pl-0">
						<div className="transform-content transform-content-five">
							<h2>Transform Your Digital Workflow Be productive Reduce risk</h2>
							<p>Lorem ipsum dolor sit elit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse Workflow Be productive consectetur adipiscing elit, sed</p>

							<div className="skills">
								<div className="skill-item">
									<div className="skill-header">
										<h3 className="skill-title">Development</h3>
										<div className="skill-percentage">
											<div className="count-box">
												<span className="count-text">50</span>%
											</div>
										</div>
									</div>

									<div className="skill-bar">
										<div className="progress">
											<div className="progress-bar" style={{width: "50%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								
								<div className="skill-item">
									<div className="skill-header">
										<h3 className="skill-title">Design</h3>

										<div className="skill-percentage"><div className="count-box"><span className="count-text">75</span>%</div></div>
									</div>

									<div className="skill-bar">
										<div className="progress">
											<div className="progress-bar" style={{width: "75%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								
								<div className="skill-item">
									<div className="skill-header">
										<h3 className="skill-title">Marketing</h3>

										<div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
									</div>

									<div className="skill-bar">
										<div className="progress">
											<div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default DigitalWorkflow;