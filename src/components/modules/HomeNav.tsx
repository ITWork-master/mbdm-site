import React from 'react';

interface HomeNavProps {
    onNavigate?: (section: string) => void;
}

const HomeNav: React.FC<HomeNavProps> = ({ onNavigate }) => {
    const menuItems = [
        { id: 'about', label: 'À propos' },
        { id: 'services', label: 'Services' },
        { id: 'catalog', label: 'Catalogue' },
        { id: 'interventions', label: 'Interventions' },
    ];

    const handleClick = (itemId: string) => {
        onNavigate?.(itemId);
    };

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 w-auto z-50 md:block hidden'>
            <div className='bg-white/40 backdrop-blur-md rounded-full'>
                <ul className='flex'>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleClick(item.id)}
                                className='rounded-full text-md py-3 px-5 bg-transparent border-0'
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default HomeNav;