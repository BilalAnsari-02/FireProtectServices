import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesHomeSection from '../components/ServicesHomeSection';
import WhyChooseUsSection from '../components/whyChooseUsSection';
import ContactBanner from '../components/ContactBanner';
function Home() {
    return ( 
        <div>
            <HeroSection/>
            <ServicesHomeSection/>
            <WhyChooseUsSection/>
            <ContactBanner/>
        </div>
     );
}

export default Home;