import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useApp } from '../../context/PageContext'

const NavWiew: React.FC = () => {

    const { setView } = useApp();

    return (
        <nav className='w-max fixed top-5 z-20 left-5'>
            <button
                onClick={()=> setView('home') }
                className='flex items-center gap-2 bg-base-100 shadow-md hover:shadow-lg p-3 rounded-full'
            >
                <ArrowLeft size={18}/>
            </button>
        </nav>
    )
}

export default NavWiew