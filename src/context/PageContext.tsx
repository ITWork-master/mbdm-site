import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import type { AppState, ViewType } from '../types/types';

interface AppContextType extends AppState {
    setLoading: (loading: boolean) => void;
    setView: (view: ViewType) => void;
    goBack: () => void;
    canGoBack: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, setState] = useState<AppState>({
        isLoading: false,
        currentView: 'home',
        history: ['home'], // Historique initial
    });

    const setLoading = (loading: boolean) => {
        setState(prev => ({ ...prev, isLoading: loading }));
    };

    const setView = (view: ViewType) => {
        setState(prev => ({
            ...prev,
            currentView: view,
            history: [...prev.history, view], // Ajoute à l'historique
        }));
    };

    const goBack = () => {
        setState(prev => {
            if (prev.history.length > 1) {
                const newHistory = prev.history.slice(0, -1); // Retire le dernier
                const previousView = newHistory[newHistory.length - 1]; // Prend l'avant-dernier
                return {
                    ...prev,
                    currentView: previousView,
                    history: newHistory,
                };
            }
            return prev;
        });
    };

    const canGoBack = state.history.length > 1;

    // Gestion du bouton retour du navigateur
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            if (canGoBack) {
                goBack();
            } else {
                // Si pas d'historique dans l'app, on empêche de quitter
                window.history.pushState(null, '', window.location.href);
            }
        };

        // Empile un état dans l'historique du navigateur
        window.history.pushState(null, '', window.location.href);

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [canGoBack]);

    const value: AppContextType = {
        isLoading: state.isLoading,
        currentView: state.currentView,
        history: state.history,
        setLoading,
        setView,
        goBack,
        canGoBack,
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