import React from 'react';
import Link from 'next/link';

const LetsGetToWork = () => {
    return (
        <>
            <div className='container'>
                <div className='get-to-work'>
                    <p>READY TO DO THIS</p>
                    <h1>Let's get to work!</h1>
                    <Link href="/contact">
                        <a className="contact-btn">Contact Us</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LetsGetToWork;