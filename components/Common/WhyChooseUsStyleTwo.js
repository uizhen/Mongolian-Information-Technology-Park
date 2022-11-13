import React from 'react';
import Link from 'next/link';

const WhyChooseUsStyleTwo = () => {
    return (
        <section className="choose-area-four ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="choose-img">
							<img src="/img/choose-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="choose-wrap p-0">
							<h2>Яагаад ITPark вэ?</h2>
							<p>Олон жилийн чадвар туршлагатай хамт олон дэлхийд өрсөлдөх Монгол мэдээллийн технологийн инженерийг хөгжүүлэн дэлхийд гарах
								Монгол технологийг гаргахад туслах нь бидний үнэт зүйл юм.</p>
		
							<ul className="mt-30">
								<li>
									<i className="bx bx-check"></i>
									Тохилог, тав тухтай ажлын байр
								</li>
								<li>
									<i className="bx bx-check"></i>
									Нөхөрсөг, чадварлаг зөвлөгөө
								</li>
								<li>
									<i className="bx bx-check"></i>
									Дэмжлэг, тусламж, урамшуулал
								</li>
							</ul>

                            <Link href="/about">
                                <a className="default-btn mt-30">Know Details</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default WhyChooseUsStyleTwo;