import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { AppState, ViewType } from '../types/types';

interface AppContextType extends AppState {
    setLoading: (loading: boolean) => void;
    setView: (view: ViewType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, setState] = useState<AppState>({
        isLoading: false,
        currentView: 'home',
    });

    const setLoading = (loading: boolean) => {
        setState(prev => ({ ...prev, isLoading: loading }));
    };

    const setView = (view: ViewType) => {
        setState(prev => ({ ...prev, currentView: view }));
    };

    const value: AppContextType = {
        isLoading: state.isLoading,
        currentView: state.currentView,
        setLoading,
        setView,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};