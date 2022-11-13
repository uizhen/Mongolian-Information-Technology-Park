import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import Partner from '../components/Common/Partner';
import HighPerformanceSolutions from '../components/HomeFive/HighPerformanceSolutions';
import DigitalWorkflow from '../components/HomeFive/DigitalWorkflow';
import PricingPlan from '../components/Pricing/PricingPlan';
import WhyChooseUsStyleTwo from '../components/Common/WhyChooseUsStyleTwo';
import ExpertTeam from '../components/Common/ExpertTeam';
import RecentProjects from '../components/Common/RecentProjects';
import CyberSecuritySatisticsGraph from '../components/HomeFive/CyberSecuritySatisticsGraph';
import FaqStyleTwo from '../components/Common/FaqStyleTwo';
import Testimonials from '../components/Common/Testimonials';
import LatesNewStyleTwo from '../components/Common/LatesNewStyleTwo';
import Footer from '../components/_App/Footer';

const Index5 = () => {
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
            <Testimonials />
            <div className="pt-100">
                <LatesNewStyleTwo />
            </div>
            <Footer />
        </>
    )
}

export default Index5;