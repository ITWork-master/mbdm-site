// src/hooks/useIntervention.ts
import { useState, useCallback } from 'react';
import { interventionService } from '../services/interventions/interventions.service';
import type { Intervention } from '../types/types';

export const useIntervention = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const getIntervention = useCallback(async (): Promise<Intervention[]> => {
        setLoading(true);
        setError(null);

        try {
            const products = await interventionService.getIntervention();
            return products;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getInterventionEchantillon = useCallback(async (): Promise<Intervention[]> => {

        setLoading(true);
        setError(null);

        try {
            const products = await interventionService.getRandomIntervention();
            return products;
        } catch (err) {
            const erroMessage = err instanceof Error ? err.message : 'une erreur est survenue lors de la récupération des echantillons'
            setError(erroMessage);
            throw err;
        } finally {
            setLoading(false);
        }

    }, []);

    const getInterventionById = useCallback(async (id: string): Promise<Intervention> => {
        setLoading(true);
        setError(null);

        try {
            const product = await interventionService.getInterventionById(id);
            return product;
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
        getIntervention,
        getInterventionEchantillon,
        getInterventionById,
        clearError,
    };
};