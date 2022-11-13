import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3>New York</h3>
							<p>88 Flower Avenue. Kingdom St. New York</p>
							<a href="mailto:hello@pisa.com">Email: info@pisa.com</a>
							<a href="tel:+822456974">+822456974</a>
						</div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588019781257!5m2!1sen!2sbd"></iframe>
						</div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-info">
							<i className="bx bx-location-plus"></i>
							<h3>California</h3>
							<p>658 Lane Drive st Riverside. California</p>
							<a href="mailto:hello@pisa.com">Email: hello@pisa.com</a>
							<a href="tel:+892-569-756">+892-569-756</a>
						</div>
					</div>

					<div className="col-lg-3 p-0">
						<div className="single-contact-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1591218371520!5m2!1sen!2sbd"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactInfo;