import React, { useEffect, useState } from 'react'
import CatalogueContainer from '../tools/CatalogueContainer'
import { useProduct } from '../../hooks/useProducts'
import CatalogueCard from '../tools/CatalogueCard';
import type { Product } from '../../types/types';
import SectionTitle from '../tools/SectionTitle';
import { useApp } from '../../context/PageContext';
import { ChevronRight } from 'lucide-react';

const Catalogue: React.FC = () => {

    const [echantillons, setEchantillons] = useState<Product[]>([]);
    const [isLoadingEchantillons, setIsLoadingEchantillons] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { getProductEchantillon } = useProduct();
    const { setView } = useApp();

    const loadEchantillons = async () => {
        try {
            setIsLoadingEchantillons(true);
            const productsData = await getProductEchantillon();
            setEchantillons(productsData);
        } catch (err) {
            console.error('Erreur lors du chargement des produits:', err);
        } finally {
            setIsLoadingEchantillons(false);
        }
    }

    useEffect(() => {
        loadEchantillons();
    }, [])

    // Nombre de cartes visibles selon le breakpoint
    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 4;
        const width = window.innerWidth;
        if (width < 768) return 1;  // mobile
        if (width < 1024) return 2; // tablette
        if (width < 1280) return 3; // desktop moyen
        return 4; // grand desktop
    }

    // Défilement automatique
    useEffect(() => {
        if (echantillons.length === 0) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const visibleCards = getVisibleCards();
                const nextSlide = prev + 1;
                if (nextSlide >= echantillons.length - visibleCards + 1) {
                    return 0;
                }
                return nextSlide;
            });
        }, 3000); // Change toutes les 3 secondes

        return () => clearInterval(interval);
    }, [echantillons.length]);

    const visibleCards = getVisibleCards();

    return (
        <section id="about" className="py-5">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête */}
                <SectionTitle
                    title='Catalogues'
                    miniIntro='Découvrez notre sélection de matériels professionnels à vendre, soigneusement classés pour répondre à vos besoins.'
                />

                {/* Contenu principal */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-7 mb-12">
                    {/* Présentation */}
                    <CatalogueContainer
                        catNumber="01"
                        catTitle="Électrique"
                        catDesc="Équipements électriques pour installations de froid et contrôle énergétique."
                    />
                    <CatalogueContainer
                        catNumber="02"
                        catTitle="Thermique"
                        catDesc="Solutions thermiques pour la production et la régulation de chaleur."
                    />
                    <CatalogueContainer
                        catNumber="03"
                        catTitle="Climatisation"
                        catDesc="Appareils et accessoires pour le confort thermique des espaces."
                    />
                    <CatalogueContainer
                        catNumber="04"
                        catTitle="Ventilation"
                        catDesc="Systèmes de renouvellement d'air et extracteurs pour environnements contrôlés."
                    />
                    <CatalogueContainer
                        catNumber="05"
                        catTitle="Froid"
                        catDesc="Matériels de réfrigération pour conservation et chaîne du froid."
                    />
                </div>

                {/* Section Échantillons avec Carousel Automatique */}
                <div className="">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Nos Produits en Vedette
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez quelques-uns de nos produits phares
                        </p>
                    </div>

                    {/* Carousel Automatique */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-4 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
                            }}
                        >
                            {isLoadingEchantillons ? (
                                // Squelette de chargement
                                Array.from({ length: visibleCards }).map((_, index) => (
                                    <div key={index} className="flex-shrink-0 w-64 h-80 bg-gray-200 rounded-2xl animate-pulse"></div>
                                ))
                            ) : (
                                echantillons.map((ech) => (
                                    <div
                                        key={ech.id}
                                        className="flex-shrink-0"
                                        style={{ width: `calc(${100 / visibleCards}% - 16px)` }}
                                    >
                                        <CatalogueCard product={ech} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Button pour voir tout les produits */}
                <div className='w-max mx-auto mt-10'>
                    <button
                        onClick={() => setView("products")}
                        className='btn btn-accent flex'
                    >
                        <p>Voir tous les produits</p>
                        <ChevronRight/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Catalogue