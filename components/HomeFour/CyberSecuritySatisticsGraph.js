import React from 'react';
import Link from 'next/link';

const CyberSecuritySatisticsGraph = () => {
    return (
        <section className="grph-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="grph-img">
							<img src="/img/graph-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="graph-content">
							<h2>Cyber security Satistics Graph</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel. </p>

							<h3>15 Ways To protect Your Bussiness From A Cyber Attack</h3>

                            <Link href="#">
                                <a className="default-btn">
                                    Download
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default CyberSecuritySatisticsGraph;