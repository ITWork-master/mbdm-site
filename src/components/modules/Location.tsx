import React from 'react'
import SectionTitle from '../tools/SectionTitle'
import mapImage from './../../assets/images/map.png'
import { MapPin, Navigation } from 'lucide-react'

const Location: React.FC = () => {
    
    const handleOpenGoogleMaps = () => {
        // Coordonnées GPS (à remplacer par les vraies coordonnées)
        const latitude = -18.1499 // Exemple: Toamasina
        const longitude = 49.4023 // Exemple: Toamasina
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`
        window.open(googleMapsUrl, '_blank', 'noopener,noreferrer')
    }

    return (
        <section id='location' className='mt-10 py-12 bg-base-100'>
            <div className="container mx-auto px-4">
                <SectionTitle
                    title='Notre Localisation'
                    miniIntro='Où nous trouver ?'
                />

                <div className="max-w-6xl mx-auto mt-8">
                    <div className="bg-base-200 rounded-3xl p-3 text-center">
                        <figure className='overflow-clip rounded-2xl mb-4 relative'>
                            <img
                                src={mapImage} 
                                alt="Carte de localisation MBDM"
                                className='w-full h-64 md:h-3/4 object-cover'
                            />
                            {/* Badge de localisation */}
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
                                <MapPin size={16} />
                                Nous sommes ici
                            </div>
                        </figure>
                        
                        {/* Bouton Google Maps */}
                        <button
                            onClick={handleOpenGoogleMaps}
                            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <Navigation size={20} />
                            Ouvrir dans Google Maps
                        </button>

                        {/* Adresse optionnelle */}
                        <div className="mt-4 text-base-content/70 text-sm">
                            <p>Cliquez sur le bouton pour obtenir l'itinéraire</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location