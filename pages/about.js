import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import DirectorMessage from '../components/Blog/DirectorMessage';
import EffectiveProtection from '../components/HomeOne/EffectiveProtection';
import ElectronicProtection from '../components/HomeOne/ElectronicProtection';
import SecurityApproach from '../components/HomeOne/SecurityApproach';
import TeamCard from '../components/Team/TeamCard';
import Testimonials from '../components/Common/Testimonials';
import Partner from '../components/Common/Partner';
import FaqForm from '../components/Faq/FaqForm';
import Footer from '../components/_App/Footer';


const About = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Бидний тухай" 
                homePageUrl="/" 
                homePageText="Нүүр" 
                activePageText="Бидний тухай" 
            /> 

            <DirectorMessage />

            <EffectiveProtection />

            <ElectronicProtection />

            <div className="pt-100">
                <SecurityApproach />
            </div>

            <TeamCard />

            <Testimonials />

            <Partner />

            <FaqForm />
            
            <Footer />
        </>
    )
}

export default About;