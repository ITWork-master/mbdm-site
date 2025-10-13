import React from 'react'
import heroImg from './../../assets/images/carte.jpg'

const Hero: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full mx-auto'>
            <div className='py-6 md:py-8 lg:py-12 w-3/4 max-w-4xl text-center'>
                <div className='hero-title text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight'>
                    <span className='mb'>M</span>aintenance et{' '}
                    <span className='mb'>B</span>onne{' '}
                    <span className='dm'>D</span>istribution des{' '}
                    <span className='dm'>M</span>atériels
                </div>
            </div>
            <div className='relative md:w-5/8 my-5 w-9/10 md:my-0 transform sm:translate-y-0'>
                <div className='hero-img'>
                    <img
                        src={heroImg}
                        alt="Service Representation"
                        className='rounded-t-2xl'
                    />
                </div>
                
            </div>
            <div id='services-link' className='pt-20'></div>
        </div>
    )
}

export default Hero