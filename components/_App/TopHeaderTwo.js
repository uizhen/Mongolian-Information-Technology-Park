import Link from 'next/link';
import React from 'react';

const TopHeaderTwo = () => {
    return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-8">
                        <ul className="header-content-left">
                            <li>
                                <a href="tel:+44-458-895-456">
                                    <i className="bx bx-phone-call"></i>
                                    +44 458 895 456
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@pisa.com">
                                    <i className="bx bx-envelope"></i>
                                    Email: hello@pisa.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-4">
                        <div className="header-content-right">
                            <ul className="log-in-sign-up">
                                <li>
                                    <i className="bx bx-log-in"></i>
                                    <Link href="/sign-in"><a>Sign In</a></Link>
                                </li>
                                <li>
                                    <i className="bx bx-user"></i>
                                    <Link href="/sign-up"><a>Sign Up</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderTwo;