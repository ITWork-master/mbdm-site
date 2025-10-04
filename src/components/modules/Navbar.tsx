import React from 'react'
import HomeNav from './HomeNav'

const Navbar: React.FC = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 w-screen">
                <div className='flex justify-between w-full items-center py-4'>
                    <div className="">
                        <div className="text-2xl px-5">
                            <span className='text-blue-700'>MB</span>
                            <span className='text-red-500'>DM</span>
                        </div>
                    </div>
                    <div className="pr-5">
                        <button className="btn btn-accent items-center flex">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <HomeNav />
        </div>
    )
}

export default Navbar