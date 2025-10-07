import React from 'react'
import type { Product } from '../../types/types'

interface CatalogueCardProps {
    product: Product
}

const CatalogueCard: React.FC<CatalogueCardProps> = ({ product }) => {
    return (
        <div className="group border border-base-content/30 p-4 rounded-2xl hover:shadow-lg transition-all duration-300 bg-base-100 flex flex-col">
            {/* Image Container */}
            <div className="flex-shrink-0 mb-3 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                {product.image_url ? (
                    <img
                        src={product.image_url}
                        alt={product.title}
                        className="w-3/4"
                    />
                ) : (
                    <div className="text-base-content/50 flex items-center justify-center h-full">
                        IMG
                    </div>
                )}
            </div>

            {/* Badge */}
            <div className="mb-2">
                <span className="badge badge-accent badge-outline badge-sm capitalize font-medium">
                    {product.type}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 transition-colors flex-grow-0">
                {product.title}
            </h3>

            {/* Description */}
            <p className="text-base-content/70 text-sm line-clamp-2 leading-relaxed flex-grow">
                {product.description}
            </p>

        </div>
    )
}

export default CatalogueCard