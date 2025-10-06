import React from 'react'
import { Shield, Users, Award, TrendingUp } from 'lucide-react'
import SectionTitle from '../tools/SectionTitle'

const About: React.FC = () => {
    const highlights = [
        {
            icon: Award,
            title: 'Expertise Confirmée',
            description: '15 ans d\'expérience dans les domaines techniques spécialisés'
        },
        {
            icon: Users,
            title: 'Équipe Qualifiée',
            description: 'Techniciens certifiés et formés aux dernières technologies'
        },
        {
            icon: Shield,
            title: 'Garantie Qualité',
            description: 'Interventions garanties et suivi personnalisé'
        },
        {
            icon: TrendingUp,
            title: 'Solutions Innovantes',
            description: 'Technologies performantes et économes en énergie'
        }
    ]

    return (
        <section id="about" className="py-5">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête */}
                <SectionTitle
                    title='A propos de Nous'
                    miniIntro='Spécialiste en matériel de froid, ventilation, thermique et climatisation'
                />

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mb-12">
                    {/* Présentation */}
                    <div className=''>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Engagement</h2>
                        <div className="space-y-4 text-gray-600 text-justify">
                            <p>
                                Depuis plus de 15 ans, nous accompagnons nos clients dans l'optimisation
                                de leurs installations techniques. Notre expertise couvre l'ensemble
                                des domaines du <strong>froid industriel</strong>, de la <strong>climatisation</strong>,
                                de la <strong>ventilation technique</strong> et des <strong>systèmes thermiques</strong>.
                            </p>
                            <p>
                                De l'installation à la maintenance, en passant par la réparation
                                et le dépannage d'urgence, nous mettons à votre service notre
                                savoir-faire et notre réactivité.
                            </p>
                            <p>
                                Notre philosophie : des solutions durables, performantes et
                                adaptées à vos besoins spécifiques.
                            </p>
                        </div>
                    </div>

                    {/* Points forts */}
                    <div className=''>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi Nous Choisir ?</h2>
                        <div className="space-y-6">
                            {highlights.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-accent-content" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Chiffres */}
                <div className="bg-accent rounded-2xl p-8 shadow-lg border border-gray-200 mx-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-accent-content mb-1">15+</div>
                            <div className="text-sm text-gray-300">Ans d'expérience</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-accent-content mb-1">500+</div>
                            <div className="text-sm text-gray-300">Clients satisfaits</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-accent-content mb-1">24/7</div>
                            <div className="text-sm text-gray-300">Service urgence</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-accent-content mb-1">100%</div>
                            <div className="text-sm text-gray-300">Garantie qualité</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About