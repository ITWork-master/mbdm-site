import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTestimonials } from '../../hooks/useTestimonials';
import type { TestimonialType } from '../../types/types';
import TestimonialsCard from '../tools/TestimonialsCard';
import SectionTitle from '../tools/SectionTitle';

const TestimonialsHome: React.FC = () => {
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const carouselRef = useRef<HTMLDivElement>(null);
    const { getTestimonials } = useTestimonials();

    const loadTestimonials = async () => {
        try {
            setIsLoading(true);
            const testimonialsData = await getTestimonials();
            setTestimonials(testimonialsData || []);
        } catch (err) {
            console.error('Erreur lors du chargement des témoignages:', err);
            setTestimonials([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log(scrollLeft);        
        loadTestimonials();
    }, []);

    // Nombre de cartes visibles selon le breakpoint
    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 3;
        const width = window.innerWidth;
        if (width < 768) return 1;  // mobile
        if (width < 1024) return 2; // tablette
        if (width < 1280) return 3; // desktop moyen
        return 4; // grand desktop
    };

    const visibleCards = getVisibleCards();
    const maxSlide = Math.max(0, testimonials.length - visibleCards);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, [maxSlide]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    }, [maxSlide]);

    // Gestion du drag
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(currentSlide * (100 / visibleCards));
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Sensibilité du drag

        // Calculer le slide basé sur le drag
        if (Math.abs(walk) > 50) { // Seuil minimum pour changer de slide
            if (walk > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Gestion du touch pour mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(currentSlide * (100 / visibleCards));
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;

        if (Math.abs(walk) > 30) { // Seuil plus bas pour mobile
            if (walk > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Auto-play optionnel
    useEffect(() => {
        if (testimonials.length <= visibleCards) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, testimonials.length, visibleCards, nextSlide]);

    const hasTestimonials = testimonials.length > 0;

    return (
        <section className="px-4 sm:px-6 lg:px-8 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle
                    title='Ils nous font confiance'
                    miniIntro="Découvrez les retours d'expérience de nos clients satisfaits"
                />

                {/* Contenu avec Carousel Manuel */}
                <div className="relative">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="flex flex-col items-center gap-4">
                                <div className="loading loading-spinner loading-lg text-primary"></div>
                                <p className="text-gray-600">Chargement des témoignages...</p>
                            </div>
                        </div>
                    ) : !hasTestimonials ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500 text-lg">
                                Aucun témoignage à afficher pour le moment
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-hidden relative">
                            {/* Flèche gauche */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-2/5 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors hover:scale-110 active:scale-95"
                                aria-label="Précédent"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Flèche droite */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-2/5 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors hover:scale-110 active:scale-95"
                                aria-label="Suivant"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Carousel avec support drag */}
                            <div
                                ref={carouselRef}
                                className={`flex transition-transform duration-500 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                                    } select-none`}
                                style={{
                                    transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
                                }}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="flex-shrink-0 px-2" // Padding entre les cartes
                                        style={{ width: `${100 / visibleCards}%` }}
                                    >
                                        <TestimonialsCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>

                            {/* Indicateurs de slide */}
                            {testimonials.length > visibleCards && (
                                <div className="flex justify-center mt-8 space-x-2">
                                    {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                                ? 'bg-primary'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Aller au témoignage ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Bouton pour voir tous les témoignages */}
                {/* {hasTestimonials && (
                    <div className="text-center mt-12">
                        <button
                            className="btn btn-outline btn-primary"
                            onClick={() => setView('testimonials')}
                        >
                            Voir tous les témoignages
                        </button>
                    </div>
                )} */}
            </div>
            <div id='about-link' className='pt-20'></div>
        </section>
    );
};

export default TestimonialsHome;