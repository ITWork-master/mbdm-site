// components/LoadingSpinner.tsx
import React from 'react';
import { useApp } from '../../context/PageContext';

const LoadingSpinner: React.FC = () => {
    const { isLoading } = useApp();

    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Chargement...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;