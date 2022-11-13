import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeFour/MainBanner';
import HighPerformanceSolutions from '../components/HomeFour/HighPerformanceSolutions';
import DigitalWorkflow from '../components/HomeFour/DigitalWorkflow';
import PricingPlan from '../components/Pricing/PricingPlan';
import WhyChooseUsStyleTwo from '../components/Common/WhyChooseUsStyleTwo';
import ExpertTeam from '../components/Common/ExpertTeam';
import RecentProjects from '../components/Common/RecentProjects';
import CyberSecuritySatisticsGraph from '../components/HomeFour/CyberSecuritySatisticsGraph';
import FaqStyleTwo from '../components/Common/FaqStyleTwo';
import LatesNewStyleTwo from '../components/Common/LatesNewStyleTwo';
import Footer from '../components/_App/Footer';
import Partner from '../components/Common/Partner';

const Index4 = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Partner />
            <HighPerformanceSolutions />
            <DigitalWorkflow />
            <PricingPlan />
            <WhyChooseUsStyleTwo />
            <ExpertTeam />
            <RecentProjects />
            <CyberSecuritySatisticsGraph />
            <FaqStyleTwo />
            <LatesNewStyleTwo />
            <Footer />
        </>
    )
}

export default Index4;