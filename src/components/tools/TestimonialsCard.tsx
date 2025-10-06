import React from 'react'
import type { TestimonialType } from './../../types/types'

interface TestimonialsCardProps {
    testimonial: TestimonialType;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonial }) => {
    return (
        <div
            key={testimonial.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
            <div className="card-body">
                <div className="text-primary mb-6">
                    <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                </div>

                {/* Contenu du témoignage */}
                <p className="text-base-content/80 text-center italic leading-relaxed mb-6">
                    "{testimonial.message}"
                </p>

                {/* Auteur */}
                <div className="flex items-center justify-center gap-4">
                    <div className="text-left">
                        <h4 className="font-semibold text-base-content">
                            {testimonial.client_name}
                        </h4>
                        <p className="text-sm text-base-content/60">
                            {testimonial.company && ` ${testimonial.company}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard