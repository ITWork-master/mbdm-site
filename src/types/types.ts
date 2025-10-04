export type ViewType = 'home' | 'products' | 'intervention' | 'testimonials';

export interface AppState {
    isLoading : boolean;
    currentView : ViewType;
}

export interface Product {
    id: string;
    user_id: string;
    title: string;
    description: string;
    type: 'electrique' | 'thermique' | 'climatisation' | 'ventilation' | 'froid';
    image_url: string | null;
    created_at: string;
    updated_at: string | null;
}
