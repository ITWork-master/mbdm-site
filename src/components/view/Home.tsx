import React from 'react'
import Navbar from '../modules/Navbar'
import Hero from '../modules/Hero'
import Services from '../modules/Services'
import About from '../modules/About'
import Catalogue from '../modules/Catalogue'
import Footer from '../modules/Footer'

const Home: React.FC = () => {
    return (
        <div className='overflow-clip'>
            <Navbar />
            <Hero/>
            <Services/>
            <About/>
            <Catalogue/>
            <Footer/>
        </div>
    )
}

export default Home