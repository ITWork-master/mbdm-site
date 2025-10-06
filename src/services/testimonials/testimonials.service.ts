// src/services/testimonials/testimonials.service.ts

import { supabase } from "../../library/supabase/supabase";
import type { TestimonialType } from "../../types/types";

export const testimonialsService = {

    async getTestimonials(): Promise<TestimonialType[]> {
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw new Error(`Erreur lors de la récupération des témoignages: ${error.message}`);
        }

        return data || [];
    },

    async getRandomTestimonials(): Promise<TestimonialType[]> {
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(3);

        if (error) {
            throw new Error(`Erreur lors de la récupération des témoignages: ${error.message}`);
        }

        return data || [];
    },

    async getTestimonialById(id: string): Promise<TestimonialType> {
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(`Erreur lors de la récupération du témoignage: ${error.message}`);
        }

        return data;
    },

};