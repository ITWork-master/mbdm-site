import React from 'react'
import Navbar from '../modules/Navbar'
import Hero from '../modules/Hero'
import Services from '../modules/Services'
import About from '../modules/About'
import Catalogue from '../modules/Catalogue'

const Home: React.FC = () => {
    return (
        <div className='overflow-clip'>
            <Navbar />
            <Hero/>
            <Services/>
            <About/>
            <Catalogue/>
        </div>
    )
}

export default Home