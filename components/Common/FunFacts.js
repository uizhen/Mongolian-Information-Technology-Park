import React from 'react';

const FunFacts = () => {
    return (
        <div className="counter-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-anti-virus-software"></i>
							<h3>704 <span className="target">+</span></h3>
							<p>Clients Protection</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-cyber"></i>
							<h3>200 <span className="target">+</span></h3>
							<p>Smart Home Protection</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-content"></i>
							<h3>800 <span className="traget">+</span></h3>
							<p>Website Protection</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-counter">
							<i className="flaticon-medal"></i>
							<h3>145 <span className="traget">+</span></h3>
							<p>Programmers Team</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default FunFacts;