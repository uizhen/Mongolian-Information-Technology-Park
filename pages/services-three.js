import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SecurityApproach from '../components/ServicesStyleThree/SecurityApproach';
import EffectiveProtection from '../components/ServicesStyleThree/EffectiveProtection';
import CyberSecurityOperation from '../components/ServicesStyleThree/CyberSecurityOperation';
import RecentProjects from '../components/Common/RecentProjects';
import Footer from '../components/_App/Footer';

const ServicesThree = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Services Style Three" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style Three" 
            /> 

            <SecurityApproach />

            <EffectiveProtection />

            <CyberSecurityOperation />

            <RecentProjects />
            
            <Footer />
        </>
    )
}

export default ServicesThree;