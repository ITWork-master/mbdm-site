import React, { useEffect, useState, useMemo } from 'react'
import NavWiew from '../modules/NavWiew'
import type { Intervention } from '../../types/types'
import { useIntervention } from '../../hooks/useIntervention'
import InterventionCard from '../tools/InterventionCard'


const Interventions: React.FC = () => {
    const [interventions, setInterventions] = useState<Intervention[]>([])
    const [isLoadingInterventions, setIsLoadingInterventions] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const { getIntervention } = useIntervention();

    const loadInterventions = async () => {
        try {
            setIsLoadingInterventions(true)
            const dataInterventions = await getIntervention();
            setInterventions(dataInterventions);
        } catch (error: any) {
            console.error('Erreur lors du chargement des interventions:', error);
        } finally {
            setIsLoadingInterventions(false)
        }
    }

    useEffect(() => {
        loadInterventions();
    }, [])

    const filteredInterventions = useMemo(() => {
        return interventions.filter(intervention => {
            const searchMatch = searchTerm === '' ||
                intervention.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                intervention.description?.toLowerCase().includes(searchTerm.toLowerCase());

            return searchMatch;
        });
    }, [interventions, searchTerm])


    return (
        <div className='pt-15 md:pt-5 min-h-screen'>
            <div className='fixed bg-base-100 top-0 left-0 w-screen h-20 sm:h-0'>
                <NavWiew />

                {/* Barre de navigation avec recherche */}
                <nav className='fixed sm:bg-base-100 sm:shadow-md top-4 w-7/10 md:w-10/11 left-20 sm:flex sm:flex-row items-start sm:items-center justify-center h-auto sm:h-12 rounded-xl p-2 sm:p-4 z-10'>
                    {/* Barre de recherche */}
                    <div className='flex items-center w-full sm:w-auto'>
                        <div className='relative flex-1 sm:flex-initial'>
                            <input
                                type='text'
                                placeholder='Rechercher une intervention...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='input focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full sm:w-64'
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-content/40 hover:text-accent-content/60'
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            {/* Contenu principal */}
            <div className='container mx-auto px-4 pt-10 sm:pt-20 pb-8'>
                {isLoadingInterventions ? (
                    // État de chargement
                    <div className='flex justify-center items-center py-12'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-accent'></div>
                    </div>
                ) : filteredInterventions.length === 0 ? (
                    // Aucune intervention trouvée
                    <div className='text-center py-12'>
                        <div className='text-gray-500 text-lg mb-4'>
                            {interventions.length === 0 ? 'Aucune intervention disponible' : 'Aucune intervention ne correspond à votre recherche'}
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className='px-6 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary-focus transition-colors'
                            >
                                Réinitialiser la recherche
                            </button>
                        )}
                    </div>
                ) : (
                    // Liste des interventions
                    <>
                        {/* Compteur de résultats */}
                        <div className='mb-6 text-sm text-gray-600'>
                            {filteredInterventions.length} intervention{filteredInterventions.length > 1 ? 's' : ''} trouvée{filteredInterventions.length > 1 ? 's' : ''}
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='ml-2 text-primary hover:text-primary-focus underline'
                                >
                                    Réinitialiser
                                </button>
                            )}
                        </div>

                        {/* Grille d'interventions */}
                        <div className='space-y-8'>
                            {filteredInterventions.map((intervention, index) => (
                                <InterventionCard
                                    key={intervention.id}
                                    intervention={intervention}
                                    imageOnRight={index % 2 === 1}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default Interventions