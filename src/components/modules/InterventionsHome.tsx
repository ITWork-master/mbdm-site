import React, { useEffect, useState } from 'react'
import { useIntervention } from '../../hooks/useIntervention'
import type { Intervention } from '../../types/types';
import InterventionCard from '../tools/InterventionCard';
import SectionTitle from '../tools/SectionTitle';
import { useApp } from '../../context/PageContext';
import { ChevronRight } from 'lucide-react';

const Interventions: React.FC = () => {
    const [echantillons, setEchantillons] = useState<Intervention[]>([])
    const [isLoadingEchantillons, setIsLoadingEchantillons] = useState(false)
    const { getInterventionEchantillon } = useIntervention();
    const { setView } = useApp()

    const loadEchantillons = async () => {
        try {
            setIsLoadingEchantillons(true);
            const interventionData = await getInterventionEchantillon();
            setEchantillons(interventionData || []);
        } catch (err) {
            console.error('Erreur lors du chargement des échantillons:', err);
            setEchantillons([]);
        } finally {
            setIsLoadingEchantillons(false);
        }
    }

    useEffect(() => {
        loadEchantillons();
    }, [])

    const hasEchantillons = echantillons.length > 0;

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-base-100">
            {/* En-tête */}
            <SectionTitle
                title='Réalisations et Palmarès'
                miniIntro='Découvrez nos dernières interventions et réalisations exemplaires'
            />

            {/* Contenu */}
            <div>
                {isLoadingEchantillons ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="flex flex-col items-center gap-4">
                            <div className="loading loading-spinner loading-lg text-primary"></div>
                            <p className="text-gray-600">Chargement des réalisations...</p>
                        </div>
                    </div>
                ) : !hasEchantillons ? (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg">
                            Aucune réalisation à afficher pour le moment
                        </div>
                    </div>
                ) : (
                    <div className="max-w-6xl mx-auto space-y-12">
                        {/* Premier échantillon - image à gauche */}
                        {echantillons.map((intervention, index) => (
                            <InterventionCard
                                key={intervention.id || index}
                                intervention={intervention}
                                imageOnRight={index % 2 !== 0} // Alternance automatique
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Bouton pour voir plus (optionnel) */}
            {hasEchantillons && (
                <div className="w-max mx-auto mt-10">
                    <button
                        onClick={() => setView("intervention")}
                        className="btn btn-accent flex"
                    >
                        <p>Voir les autres interventions</p>
                        <ChevronRight/>
                    </button>
                </div>
            )}
        </section>
    )
}

export default Interventions