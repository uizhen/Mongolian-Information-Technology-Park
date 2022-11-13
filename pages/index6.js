import React from 'react';
import NavbarThree from '../components/_App/NavbarThree';
import MainBanner from '../components/HomeSix/MainBanner';
import Partners from '../components/HomeSix/Partners';
import ServicesTab from '../components/HomeSix/ServicesTab';
import OurServiceArea from '../components/HomeSix/OurServiceArea';
import CounterArea from '../components/HomeSix/CounterArea';
import WhyChooseUs from '../components/HomeSix/WhyChooseUs';
import Testimonials from '../components/HomeSix/Testimonials';
import LatestNews from '../components/HomeSix/LatestNews';
import LetsTalkArea from '../components/Common/LetsTalkArea';
import FooterTwo from '../components/_App/FooterTwo';
import IntroVideo from '../components/HomeSix/IntroVideo';

const Index6 = () => {
    return (
        <>
            <NavbarThree />
            <MainBanner />
            <Partners />
            <ServicesTab />
            <OurServiceArea />
            <CounterArea />
            <WhyChooseUs />
            <Testimonials />
            <IntroVideo />
            <LatestNews />
            <LetsTalkArea />
            <FooterTwo />
        </>
    )
}

export default Index6;