import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignIn = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
            /> 

            <div className="user-area-all-style log-in-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Log In to your account!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div>

                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 form-condition">
                                    <div className="agree-label">
                                        <input type="checkbox" id="chb1" />
                                        <label forhtml="chb1">Remember Me</label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <Link href="/forgot-password">
                                        <a className="forget">Forgot my password?</a>
                                    </Link>
                                </div>

                                <div className="col-12">
                                    <button className="default-btn btn-two" type="submit">
                                        Sign In
                                    </button>
                                </div>

                                <div className="col-12">
                                    <p className="account-desc">
                                        Not a member? <Link href="/sign-up"><a>Sign Up</a></Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignIn;