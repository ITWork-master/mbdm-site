import React from 'react';

const HomeNav: React.FC = () => {
    const menuItems = [
        { id: 'about-link', label: 'À propos' },
        { id: 'services-link', label: 'Services' },
        { id: 'catalog-link', label: 'Catalogue' },
        { id: 'interventions-link', label: 'Interventions' },
    ];

    // Fonction pour le smooth scroll
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 w-auto z-50 md:block hidden'>
            <div className='backdrop-blur-md rounded-full'>
                <ul className='flex items-center h-12'>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#` + item.id}
                                className='rounded-full text-md p-4 border-0 hover:bg-gray-100 transition-colors duration-200'
                                onClick={(e) => handleSmoothScroll(e, item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default HomeNav;