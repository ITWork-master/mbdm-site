// src/services/products.services.ts

import { supabase } from "../../library/supabase/supabase";
import type { Product } from "../../types/types";


export const productsService = {

    async getProducts(): Promise<Product[]> {

        const { data, error } = await supabase
            .from('images')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw new Error(`Erreur lors de la récupération des produits: ${error.message}`);
        }

        return data || [];
    },

    async getRandomProducts(): Promise<Product[]> {

        const { data, error } = await supabase
            .from('images')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(6);
        
            if (error) {
                throw new Error(`Erreur lors de la récupération des produits : ${error.message}`)
            }

            return data || []

    },

    async getProductById(id: string): Promise<Product> {
        const { data, error } = await supabase
            .from('images')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(`Erreur lors de la récupération du produit: ${error.message}`);
        }

        return data;
    },

};