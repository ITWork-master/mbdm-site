import React from 'react'
import type { Product } from '../../types/types'

interface ProductsCardProps {
    product: Product;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {
    return (
        <div className='border border-accent/30 w-70 mx-auto rounded-xl overflow-clip bg-base-300'>
            <div className='bg-base-300'>
                <figure className='rounded-br-2xl bg-white'>
                    <img
                        src={product.image_url || undefined}
                        alt={product.title || ""}
                        className='w-3/4 mx-auto'
                    />
                </figure>
            </div>
            <div className='bg-white h-max'>
                <div className='px-5 bg-base-300 flex flex-col py-5 rounded-tl-2xl'>
                    <div className='text-xs uppercase'>
                        {product?.type}
                    </div>
                    <h2 className='font-bold text-xl'>
                        {product?.title}
                    </h2>
                    <p className='text-sm'>
                        {product?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard