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
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
            /> 

            <section className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Create an account!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div>
                    
                    <div className="contact-form-action">
                        <form>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="First Name" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Username" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="password" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                    <div className="agree-label">
                                        <input type="checkbox" id="chb2" />
                                        <label forhtml="chb2">
                                            I agree with Pisa  
                                            <Link href="/terms-conditions"><a>Terms & Conditions</a></Link> & 
                                            <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="default-btn btn-two" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                                
                                <div className="col-12">
                                    <p className="account-desc">
                                        Already have an account? <Link href="/sign-in"><a>Sign In</a></Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        
            <Footer />
        </>
    )
}

export default SignIn;