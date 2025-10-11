import React from 'react'
import Navbar from '../modules/Navbar'
import Hero from '../modules/Hero'
import Services from '../modules/Services'
import About from '../modules/About'
import Catalogue from '../modules/Catalogue'
import Footer from '../modules/Footer'
import Interventions from '../modules/InterventionsHome'
import TestimonialsHome from '../modules/TestimonialsHome'
import Contact from '../modules/Contact'
import Location from '../modules/Location'

const Home: React.FC = () => {
    return (
        <div className='overflow-clip'>
            <Navbar />
            <div className='pt-20 sm:pt-0'>
                <Hero />
                <Services />
                <Catalogue />
                <Interventions />
                <TestimonialsHome />
                <About />
                <Contact />
                <Location />
                <Footer />
            </div>
        </div>
    )
}

export default Home