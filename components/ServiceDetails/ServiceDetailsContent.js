import React from 'react';
import RelatedServices from './RelatedServices';
import Sidebar from './Sidebar';

const ServiceDetailsContent = () => {
    return (
        <div className="blog-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="services-details">
							<h3>Secure Manged IT</h3>

							<img src="/img/services-details/services-details1.jpg" alt="Image" />

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  but also leap into electronic</p>

							<div className="choose-wrap">
								<h2>Why Choose Us</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
			
								<ul>
									<li>
										<i className="bx bx-check"></i>
										Extemly low response  time at all time
									</li>
									<li>
										<i className="bx bx-check"></i>
										We are always ready for your growth
									</li>
									<li>
										<i className="bx bx-check"></i>
										We understand security and compliance
									</li>
								</ul>
							</div>

							<h3>Cloud Security</h3>

							<img src="/img/services-details/services-details2.jpg" alt="Image" />

							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet comes from a line in section 1.10.32.</p>

                            {/* Related Services */}
                            <RelatedServices />	
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
    )
}

export default ServiceDetailsContent;