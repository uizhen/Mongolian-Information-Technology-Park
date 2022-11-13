import React from 'react';

const EffectiveProtection = () => {
    return (
        <section className="complete-area ptb-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 pl-0">
						<div className="complete-img"></div>
					</div>
					<div className="col-lg-6">
						<div className="complete-content">
							<h2>Бидний эрхэм зорилго</h2>
							<p>Гарааны бизнес болон өндөр технологийг хөгжүүлэх, дамжуулах, чадварлаг хүний нөөцийг мэргэшүүлэх, салбарын эко системийг
								төгөлдөржүүлж олон улсад тэргүүлэгч цөм байгууллага болох.</p>

							<div className="row">
								<div className="col-lg-6 col-sm-6">
									<div className="single-security">
										<i className="flaticon-order"></i>
										<h3>Стратеги №1</h3>
										<p>Дэлхийд хүлээн зөвшөөрөгдсөн технологийн цогцолбор байгууллага болох</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security">
										<i className="flaticon-anti-virus-software"></i>
										<h3>Стратеги №2</h3>
										<p>Тогтмол бодлого баримталж зорилгоо биелүүлэх</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security mb-0 mb-rs-need">
										<i className="flaticon-scientist"></i>
										<h3>Стратеги №3</h3>
										<p>Олон улсын шаардлагад нийцсэн мэдлэг ур чадвар бүхий Монгол хүнийг бэлтгэх</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security mb-0">
										<i className="flaticon-technical-support"></i>
										<h3>Стратеги №4</h3>
										<p>Өрсөлдөх чадвар бүхий гарааны компаниудыг дэлхийн зах зээлд гаргах	</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="complete-shape">
				<img src="/img/complete-shape.png" alt="Image" />
			</div>
		</section>
    )
}

export default EffectiveProtection;