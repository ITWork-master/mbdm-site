export type ViewType = 'home' | 'products' | 'intervention' | 'testimonials';

export interface AppState {
    isLoading : boolean;
    currentView : ViewType;
}

