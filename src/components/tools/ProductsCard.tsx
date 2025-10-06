import React from 'react'
import type { Product } from '../../types/types'

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {
    return (
        <div className='border border-accent/30 w-60 rounded-xl'>
            <figure>
                <img
                    src={ product.image_url || undefined}
                    alt={ product.title || ""}
                    className='w-full p-2'
                />
            </figure>
            <div>
                <h2>
                    {product?.title}
                </h2>
                <p>
                    {product?.description}
                </p>
                <div className='badge badge-accent badge-outline'>
                    {product?.type}
                </div>
            </div>
        </div>
    )
}

export default ProductsCard