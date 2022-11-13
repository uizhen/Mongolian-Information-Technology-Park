import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCardStyleTwo from '../components/Blog/BlogCardStyleTwo';
import Footer from '../components/_App/Footer';

const BlogRightSidebar = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Right Sidebar" 
            /> 

            <BlogCardStyleTwo />
            
            <Footer />
        </>
    )
}

export default BlogRightSidebar;