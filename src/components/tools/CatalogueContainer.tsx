import React from 'react'

interface CatalogueContainerProps {
    catNumber: string,
    catTitle: string,
    catDesc: string
}

const CatalogueContainer: React.FC<CatalogueContainerProps> = ({ catNumber, catTitle, catDesc }) => {
    return (
        <div className='p-4 bg-base-200 border border-base-content/20 w-full rounded-xl'>
            <div className='text-7xl py-5 text-base-content/40'>
                {catNumber}
            </div>
            <div className='uppercase font-extrabold sm:text-2xl text-lg'>
                {catTitle}
            </div>
            <div className='text-sm text-base-content/60'>
                {catDesc}
            </div>
        </div>
    )
}

export default CatalogueContainer