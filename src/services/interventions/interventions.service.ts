// src/services/products.services.ts

import { supabase } from "../../library/supabase/supabase";
import type { Intervention } from "../../types/types";


export const interventionService = {

    async getIntervention(): Promise<Intervention[]> {

        const { data, error } = await supabase
            .from('achievements')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw new Error(`Erreur lors de la récupération des produits: ${error.message}`);
        }

        return data || [];
    },

    async getRandomIntervention(): Promise<Intervention[]> {

        const { data, error } = await supabase
            .from('achievements')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(2);
        
            if (error) {
                throw new Error(`Erreur lors de la récupération des produits : ${error.message}`)
            }

            return data || []

    },

    async getInterventionById(id: string): Promise<Intervention> {
        const { data, error } = await supabase
            .from('achievements')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(`Erreur lors de la récupération du produit: ${error.message}`);
        }

        return data;
    },

};