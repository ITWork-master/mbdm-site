import React from 'react'

interface SectionTitleProps {
    title : string;
    miniIntro: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, miniIntro }) => {
    return (
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {title}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {miniIntro}
            </p>
        </div>
    )
}

export default SectionTitle