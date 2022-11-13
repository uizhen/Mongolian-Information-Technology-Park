import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import EffectiveProtection from '../components/HomeOne/EffectiveProtection';
import ElectronicProtection from '../components/HomeOne/ElectronicProtection';
import SecurityApproach from '../components/HomeOne/SecurityApproach';
import Testimonials from '../components/Common/Testimonials';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const About = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
            /> 
        
            <EffectiveProtection />

            <ElectronicProtection />

            <div className="pt-100">
                <SecurityApproach />
            </div>

            <Testimonials />

            <Partner />
            
            <Footer />
        </>
    )
}

export default About;