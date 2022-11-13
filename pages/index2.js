import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeTwo/MainBanner';
import Partner from '../components/Common/Partner';
import CyberSecurityOperation from '../components/HomeTwo/CyberSecurityOperation';
import WebsiteSecurity from '../components/HomeTwo/WebsiteSecurity';
import HighPerformanceSolutions from '../components/HomeTwo/HighPerformanceSolutions';
import ElectronicProtection from '../components/HomeTwo/ElectronicProtection';
import ProtectYourWebsite from '../components/Common/ProtectYourWebsite';
import FunFacts from '../components/Common/FunFacts';
import PricingPlan from '../components/Pricing/PricingPlan';
import Testimonials from '../components/Common/Testimonials';
import LatesNews from '../components/Common/LatesNews';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    return (
        <>
            <Navbar />
            
            <MainBanner />

            <Partner />

            <CyberSecurityOperation />

            <WebsiteSecurity />

            <HighPerformanceSolutions />

            <ElectronicProtection />

            <ProtectYourWebsite />

            <FunFacts />

            <PricingPlan />

            <Testimonials />

            <div className="pt-100">
                <LatesNews />
            </div>

            <Footer />
        </>
    )
}

export default Index2;