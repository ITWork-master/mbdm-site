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
            <div className='relative md:w-6/8 my-10 w-9/10 md:my-0 transform translate-y-10 sm:translate-y-0'>
                <div className='hero-img md:w-7/9 w-10/12 mx-auto'>
                    <img
                        src={heroImg}
                        alt="Service Representation"
                        className='rounded-t-2xl'
                    />
                </div>
                <div className='hero-img-back rounded-2xl -z-10 bg-stone-300 h-3/5 absolute bottom-0 w-full'></div>
            </div>
            <div id='services-link' className='pt-20'></div>
        </div>
    )
}

export default Hero