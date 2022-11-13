import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WebsiteSecurity from '../components/ServicesStyleOne/WebsiteSecurity';
import ServicesCard from '../components/ServicesStyleOne/ServicesCard';
import Footer from '../components/_App/Footer';

const ServicesOne = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Services Style One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style One" 
            /> 

            <WebsiteSecurity />

            <ServicesCard /> 
            
            <Footer />
        </>
    )
}

export default ServicesOne;