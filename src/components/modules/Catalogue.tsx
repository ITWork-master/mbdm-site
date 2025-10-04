import React from 'react'
import CatalogueContainer from '../tools/CatalogueContainer'

const Catalogue: React.FC = () => {
    return (
        <section id="about" className="py-5">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Catalogues
                    </h1>
                    <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre sélection de matériels professionnels à vendre, soigneusement classés pour répondre à vos besoins.
                    </p>
                </div>

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
                        catDesc="Systèmes de renouvellement d’air et extracteurs pour environnements contrôlés."
                    />
                    <CatalogueContainer
                        catNumber="05"
                        catTitle="Froid"
                        catDesc="Matériels de réfrigération pour conservation et chaîne du froid."
                    />
                </div>


            </div>
        </section>
    )
}

export default Catalogue