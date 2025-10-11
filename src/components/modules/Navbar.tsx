import React, { useState, useRef, useEffect } from 'react'
import HomeNav from './HomeNav'

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false)
    }

    // Fonction pour le smooth scroll
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault()
        closeDropdown()
        
        if (targetId === 'top') {
            scrollToTop()
            return
        }
        
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Gestion de l'affichage du bouton "retour en haut"
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Gestion du clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const menuItems = [
        { id: 'about-link', label: 'À propos' },
        { id: 'services-link', label: 'Services' },
        { id: 'catalog-link', label: 'Catalogues' },
        { id: 'interventions-link', label: 'Interventions' },
        { id: 'contact-link', label: 'Contacts' },
    ];

    return (
        <>
            <div className='fixed z-20 sm:relative'>
                <div className="navbar bg-base-100 w-screen">
                    <div className='flex justify-between w-full items-center py-4'>
                        <div className="">
                            <div className="text-2xl px-5">
                                <span className='text-blue-700'>MB</span>
                                <span className='text-red-500'>DM</span>
                            </div>
                        </div>

                        {/* Navigation desktop - visible sur les grands écrans */}
                        <div className="hidden md:block pr-5">
                            <HomeNav />
                        </div>
                        <div className='hidden md:block mr-5'>
                            <a 
                                href="#contact-link" 
                                className='btn btn-accent'
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                            >
                                Contact
                            </a>
                        </div>
                        
                        {/* Bouton dropdown mobile - visible sur les petits écrans */}
                        <div className="md:hidden pr-5" ref={dropdownRef}>
                            <div className="dropdown dropdown-end">
                                <button
                                    onClick={toggleDropdown}
                                    className="btn btn-ghost btn-circle"
                                    aria-label="Menu navigation"
                                    aria-expanded={isDropdownOpen}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {isDropdownOpen ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        )}
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <ul className='flex flex-col'>
                                            {menuItems.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href={`#` + item.id}
                                                        className='rounded-full text-md bg-transparent border-0 p-3 hover:bg-gray-100 transition-colors duration-200'
                                                        onClick={(e) => handleSmoothScroll(e, item.id)}
                                                    >
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bouton "Retour en haut" */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-50 bottom-8 right-8 btn btn-circle btn-accent border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Retour en haut de la page"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 15l7-7 7 7" 
                        />
                    </svg>
                </button>
            )}
        </>
    )
}

export default Navbar