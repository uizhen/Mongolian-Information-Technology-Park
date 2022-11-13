import React from 'react';

const CounterArea = () => {
    return (
        <div className="counter-area-six bg-color pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-anti-virus-software"></i>

                            <h2>
                                <span>3500</span> <span>+</span>
                            </h2>

                            <p>Customers Served Globally</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-cyber"></i>

                            <h2>
                                <span>2500</span> <span>+</span>
                            </h2>

                            <p>Cybersecurity Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-content"></i>

                            <h2>
                                <span>85</span><span>%</span>
                            </h2>

                            <p>Customer Retention Rate</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-medal"></i>

                            <h2>
                                <span>350</span> <span>+</span>
                            </h2>

                            <p>Cybersecurity Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterArea;