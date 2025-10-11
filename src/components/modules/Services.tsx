import { AlertTriangle, Hammer, PackagePlus, Wrench } from 'lucide-react'
import React, { useState } from 'react'

interface ServiceItem {
    id: string;
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    shortDescription: string;
    color: 'blue' | 'green' | 'orange' | 'red';
}

const Services: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const services: ServiceItem[] = [
        {
            id: 'installation',
            icon: PackagePlus,
            title: 'Installation',
            shortDescription: 'Installation professionnelle de vos équipements',
            description: 'Installation professionnelle de vos équipements de froid, climatisation et ventilation. Garantie et mise en service complète avec tests de performance.',
            color: 'blue'
        },
        {
            id: 'entretien',
            icon: Wrench,
            title: 'Entretien',
            shortDescription: 'Maintenance préventive pour performances optimales',
            description: 'Maintenance préventive et curative pour optimiser les performances et la durée de vie de vos installations thermiques. Contrôles réguliers et rapports détaillés.',
            color: 'green'
        },
        {
            id: 'reparation',
            icon: Hammer,
            title: 'Réparation',
            shortDescription: 'Diagnostic et réparation de toutes pannes',
            description: 'Diagnostic précis et réparation de toutes pannes sur vos équipements de froid et systèmes de climatisation. Utilisation de pièces détachées d\'origine.',
            color: 'orange'
        },
        {
            id: 'depannage',
            icon: AlertTriangle,
            title: 'Dépannage Urgence',
            shortDescription: 'Intervention rapide 24h/24 pour urgences',
            description: 'Intervention rapide 24h/24 pour toutes urgences sur vos installations critiques de froid et climatisation. Solution temporaire immédiate si nécessaire.',
            color: 'red'
        }
    ];

    const colorClasses = {
        blue: {
            bg: 'bg-blue-50',
            icon: 'text-blue-600',
            hover: 'bg-blue-600',
            border: 'border-blue-200',
            button: 'bg-blue-500 hover:bg-blue-600'
        },
        green: {
            bg: 'bg-green-50',
            icon: 'text-green-600',
            hover: 'bg-green-600',
            border: 'border-green-200',
            button: 'bg-green-500 hover:bg-green-600'
        },
        orange: {
            bg: 'bg-orange-50',
            icon: 'text-orange-600',
            hover: 'bg-orange-600',
            border: 'border-orange-200',
            button: 'bg-orange-500 hover:bg-orange-600'
        },
        red: {
            bg: 'bg-red-50',
            icon: 'text-red-600',
            hover: 'bg-red-600',
            border: 'border-red-200',
            button: 'bg-red-500 hover:bg-red-600'
        }
    };

    const handleCardClick = (serviceId: string) => {
        setExpandedCard(expandedCard === serviceId ? null : serviceId);
    };

    return (
        <section id="services" className="">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Nos Services Spécialisés
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Expert en maintenance et distribution de matériel de <span className="font-semibold text-blue-600">froid, ventilation, thermique et climatisation</span>.
                        Des solutions techniques adaptées à vos besoins.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        const colors = colorClasses[service.color];
                        const isExpanded = expandedCard === service.id;

                        return (
                            <div
                                key={service.id}
                                onClick={() => handleCardClick(service.id)}
                                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border-2 ${colors.border} hover:border-transparent hover:-translate-y-2 cursor-pointer ${
                                    isExpanded ? 'ring-2 ring-blue-500' : ''
                                }`}
                            >
                                {/* Icône principale */}
                                <div className="flex justify-center mb-6">
                                    <div className={`p-4 rounded-xl transition-all duration-500 ${colors.bg} ${
                                        isExpanded ? 'scale-110' : ''
                                    }`}>
                                        <IconComponent className={`w-8 h-8 ${colors.icon} transition-colors duration-500`} />
                                    </div>
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    {service.title}
                                </h3>

                                {/* Description courte (toujours visible) */}
                                <p className="text-gray-600 leading-relaxed text-center text-sm mb-4">
                                    {service.shortDescription}
                                </p>

                                {/* Description complète (visible au clic/hover) */}
                                <div className={`transition-all duration-300 overflow-hidden ${
                                    isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <p className="text-gray-600 leading-relaxed text-center text-sm">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Indicateur d'expansion */}
                                <div className="flex justify-center mt-4">
                                    <button 
                                        className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 ${
                                            isExpanded 
                                                ? `${colors.button} text-white` 
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCardClick(service.id);
                                        }}
                                    >
                                        {isExpanded ? 'Réduire' : 'En savoir plus'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bannière expertise */}
                <div className="mt-16 bg-accent rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Expertise Technique Confirmée</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        Forts de notre expérience dans les domaines du froid industriel, ventilation technique,
                        thermique et climatisation, nous garantissons des interventions de qualité et des solutions durables.
                    </p>
                </div>
                <div id='catalog-link' className='pt-20'></div>
            </div>
        </section>
    )
}

export default Services