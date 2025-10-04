import React from 'react'
import heroImg from './../../assets/images/heroImage.png'

const Hero: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full mx-auto'>
            <div className='py-8 w-max'>
                <div className='hero-title text-3xl md:text-4xl font-extrabold'>
                    <span className='mb'>M</span>aintenance et <span className='mb'>B</span>onne <span className='dm'>D</span>istribution des <span className='dm'>M</span>atériels
                </div>
            </div>
            <div className='relative w-6/8'>
                <div className='hero-img w-7/9 mx-auto'>
                    <img
                        src={heroImg}
                        alt="Service Representation"
                        className='rounded-t-2xl'
                    />
                </div>
                <div className='hero-img-back rounded-2xl -z-10 bg-stone-300 h-3/5 absolute bottom-0 w-full'></div>
            </div>
        </div>
    )
}

export default Hero