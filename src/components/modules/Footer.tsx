import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer p-6 text-base-content">
            <div className="w-full max-w-6xl mx-auto">
                {/* Ligne de séparation */}
                <div className="w-full border-t border-base-content/20 mb-6"></div>
                
                {/* Contenu du footer */}
                <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4 text-center">
                    {/* Copyright */}
                    <div>
                        <p className="text-sm text-base-content/70">
                            &copy; {currentYear} MBDM. Tous droits réservés.
                        </p>
                    </div>

                    {/* Crédits */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-base-content/50">
                        <span>Design: Aïdi</span>
                        <span>Développement: Xeon</span>
                        <span>Organisation: ITWork</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer