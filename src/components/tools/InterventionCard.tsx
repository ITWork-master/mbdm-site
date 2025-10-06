import React from 'react'
import type { Intervention } from '../../types/types';

interface InterventionCardProps {
    intervention: Intervention;
    flexDisposition : string;
}

const InterventionCard: React.FC<InterventionCardProps> = ({ intervention, flexDisposition }) => {
    return (
        <div className={`bg-base-100 flex flex-col lg:${flexDisposition} items-center gap-6 lg:gap-8 p-6 rounded-2xl`}>
            {/* Section Image à gauche */}
            <figure className="w-full lg:w-2/5">
                <img
                    src={intervention?.image_url || '/placeholder-image.jpg'}
                    alt={intervention?.title || 'Image intervention'}
                    className='w-full object-cover rounded-2xl shadow-md'
                />
            </figure>

            {/* Section Contenu à droite */}
            <div className="w-full lg:w-3/5 space-y-4">
                <h2 className="card-title text-2xl lg:text-3xl font-bold text-base-content">
                    {intervention?.title}
                </h2>
                <p className="text-base-content/80 leading-relaxed text-base lg:text-lg text-justify">
                    {intervention?.description}
                </p>
            </div>
        </div>
    )
}

export default InterventionCard