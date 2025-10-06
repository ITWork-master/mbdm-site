import React, { useEffect, useState } from 'react';
import { useTestimonials } from '../../hooks/useTestimonials';
import type { TestimonialType } from '../../types/types';
import TestimonialsCard from '../tools/TestimonialsCard';
import SectionTitle from '../tools/SectionTitle';
import { useApp } from '../../context/PageContext';

const TestimonialsHome: React.FC = () => {
    const [echantillons, setEchantillons] = useState<TestimonialType[]>([]);
    const [isLoadingEchantillons, setIsLoadingEchantillons] = useState(false);
    const { getRandomTestimonials } = useTestimonials();
    const { setView } = useApp();

    const loadEchantillons = async () => {
        try {
            setIsLoadingEchantillons(true);
            const testimonialsData = await getRandomTestimonials();
            setEchantillons(testimonialsData || []);
        } catch (err) {
            console.error('Erreur lors du chargement des témoignages:', err);
            setEchantillons([]);
        } finally {
            setIsLoadingEchantillons(false);
        }
    };

    useEffect(() => {
        loadEchantillons();
    }, []);

    const hasEchantillons = echantillons.length > 0;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-base-100">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title='Ils nous font confiance'
                    miniIntro="Découvrez les retours d'expérience de nos clients satisfaits"
                />

                {/* Contenu */}
                <div>
                    {isLoadingEchantillons ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="flex flex-col items-center gap-4">
                                <div className="loading loading-spinner loading-lg text-primary"></div>
                                <p className="text-gray-600">Chargement des témoignages...</p>
                            </div>
                        </div>
                    ) : !hasEchantillons ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500 text-lg">
                                Aucun témoignage à afficher pour le moment
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {echantillons.map((testimonial) => (
                                <TestimonialsCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Bouton pour voir plus (optionnel) */}
                {hasEchantillons && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setView("testimonials")}
                            className="btn btn-primary btn-lg"
                        >
                            Voir tous les témoignages
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonialsHome;