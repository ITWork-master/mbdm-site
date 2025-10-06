// components/ViewContainer.tsx
import React from 'react';
import { useApp } from '../../context/PageContext';
import Home from '../view/Home';
import Testimonials from '../view/Testimonials';
import Interventions from '../modules/InterventionsHome';
import Products from '../view/Products';

const ViewContainer: React.FC = () => {
    const { currentView } = useApp();

    const renderView = () => {
        switch (currentView) {
            case 'home':
                return <Home />;
            case 'intervention':
                return <Interventions />;
            case 'testimonials':
                return <Testimonials />;
            case 'products':
                return <Products />;
            default:
                return <Home />;
        }
    };

    return (
        <main className="view-container">
            {renderView()}
        </main>
    );
};

export default ViewContainer;