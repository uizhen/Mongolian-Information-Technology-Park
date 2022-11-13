import React from 'react';

const DigitalWorkflow = () => {
    return (
        <section className="transform-area-five pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 pr-0">
						<div className="transform-img">
							<img src="/img/transform-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6 pl-0">
						<div className="transform-content transform-content-five">
							<h2>Өөрийн санааг бодитой болгон хэрэгжүүлэхийн тулд</h2>
							<p>Чадварлаг хамт олон, санаа нэгтэй залуусаас гадна тухайн хийж буй ажлыг өмнө нь гүйцэтгэж байсан туршлагатай ментор, зөвлөхийн
								туршлага юунаас илүү үнэ цэнэтэй. Инкубатор компаниуддаа ITPark туршлагатай судлаач мэргэжилтнүүдтэй холбох гүүр болон ажилладаг.
							</p>

							<div className="skills">
								<div className="skill-item">
									<div className="skill-header">
										<h3 className="skill-title">Багийн ур чадвар</h3>
										<div className="skill-percentage">
											<div className="count-box">
												<span className="count-text">80</span>%
											</div>
										</div>
									</div>

									<div className="skill-bar">
										<div className="progress">
											<div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								
								<div className="skill-item">
									<div className="skill-header">
										<h3 className="skill-title">Бизнес санаа</h3>

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
										<h3 className="skill-title">Судалгаа шинжилгээ</h3>

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