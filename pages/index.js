import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import Partner from '../components/Common/Partner';
import WebsiteSecurity from '../components/HomeOne/WebsiteSecurity';
import SecurityApproach from '../components/HomeOne/SecurityApproach';
import HighPerformanceSolutions from '../components/HomeOne/HighPerformanceSolutions';
import ElectronicProtection from '../components/HomeOne/ElectronicProtection';
import EffectiveProtection from '../components/HomeOne/EffectiveProtection';
import Testimonials from '../components/Common/Testimonials';
import CyberSecurityOperation from '../components/HomeOne/CyberSecurityOperation';
import LatesNews from '../components/Common/LatesNews';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Partner />

            <WebsiteSecurity />

            <SecurityApproach />

            <HighPerformanceSolutions />

            <ElectronicProtection />

            <EffectiveProtection />

            <Testimonials />

            <CyberSecurityOperation />

            <LatesNews />
            
            <Footer />
        </>
    )
}

export default Index;