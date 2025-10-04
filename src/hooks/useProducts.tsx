// src/hooks/useProduct.ts
import { useState, useCallback } from 'react';
import { productsService } from '../services/products/products.service';
import type { Product } from '../types/types';

export const useProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const getProducts = useCallback(async (): Promise<Product[]> => {
        setLoading(true);
        setError(null);

        try {
            const products = await productsService.getProducts();
            console.log("Les Produits :", products);

            return products;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getProductEchantillon = useCallback(async (): Promise<Product[]> => {

        setLoading(true);
        setError(null);

        try {
            const products = await productsService.getRandomProducts();
            return products;
        } catch (err) {
            const erroMessage = err instanceof Error ? err.message : 'une erreur est survenue lors de la récupération des echantillons'
            setError(erroMessage);
            throw err;
        } finally {
            setLoading(false);
        }

    }, []);

    const getProductById = useCallback(async (id: string): Promise<Product> => {
        setLoading(true);
        setError(null);

        try {
            const product = await productsService.getProductById(id);
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
        getProducts,
        getProductEchantillon,
        getProductById,
        clearError,
    };
};