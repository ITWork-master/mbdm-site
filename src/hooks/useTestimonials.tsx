// src/hooks/useTestimonials.tsx
import { useState, useCallback } from 'react';
import { testimonialsService } from '../services/testimonials/testimonials.service';
import type { TestimonialType } from '../types/types';

export const useTestimonials = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getTestimonials = useCallback(async (): Promise<TestimonialType[]> => {
        setLoading(true);
        setError(null);

        try {
            const testimonials = await testimonialsService.getTestimonials();
            return testimonials;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getRandomTestimonials = useCallback(async (): Promise<TestimonialType[]> => {
        setLoading(true);
        setError(null);

        try {
            const testimonials = await testimonialsService.getRandomTestimonials();
            return testimonials;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue lors de la récupération des témoignages aléatoires';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getTestimonialById = useCallback(async (id: string): Promise<TestimonialType> => {
        setLoading(true);
        setError(null);

        try {
            const testimonial = await testimonialsService.getTestimonialById(id);
            return testimonial;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        loading,
        setLoading,
        error,
        getTestimonials,
        getRandomTestimonials,
        getTestimonialById,
        clearError,
    };
};