import React from 'react'
import Navbar from '../modules/Navbar'
import Hero from '../modules/Hero'
import Services from '../modules/Services'
import About from '../modules/About'
import Catalogue from '../modules/Catalogue'
import Footer from '../modules/Footer'
import Interventions from '../modules/InterventionsHome'
import TestimonialsHome from '../modules/TestimonialsHome'

const Home: React.FC = () => {
    return (
        <div className='overflow-clip'>
            <Navbar />
            <Hero/>
            <Services/>
            <Catalogue/>
            <Interventions/>
            <TestimonialsHome/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home