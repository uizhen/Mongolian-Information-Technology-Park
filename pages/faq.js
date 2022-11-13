import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqStyleOne from '../components/Common/FaqStyleOne';
import FaqForm from '../components/Faq/FaqForm';
import Footer from '../components/_App/Footer';

const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
            /> 

            <FaqStyleOne />

            <FaqForm />
            
            <Footer />
        </>
    )
}

export default FAQ;