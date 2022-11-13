import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/ProjectDetails/ProjectDetailsContent';
import Footer from '../components/_App/Footer';
import LetsGetToWork from '../components/Common/LetsGetToWork';

const ProjectDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Project Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Project Details" 
            /> 

            <ProjectDetailsContent />

            <div className='pb-100'>
                <LetsGetToWork />
            </div>
            
            <Footer />
        </>
    )
}

export default ProjectDetails;