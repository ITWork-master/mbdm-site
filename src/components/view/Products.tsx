import React, { useEffect, useState, useMemo } from 'react'
import NavWiew from '../modules/NavWiew'
import type { Product } from '../../types/types'
import { useProduct } from '../../hooks/useProducts'
import ProductsCard from '../tools/ProductsCard'

type ProductCategory = 'Tous' | 'Électrique' | 'Thermique' | 'Climatisation' | 'Ventilation' | 'Froid'

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Tous')
    const [searchTerm, setSearchTerm] = useState('')
    const { getProducts } = useProduct();

    const loadProducts = async () => {
        try {
            setIsLoadingProducts(true)
            const dataProducts = await getProducts();
            setProducts(dataProducts);
        } catch (error: any) {
            console.error('Erreur lors du chargement des produits:', error);
        } finally {
            setIsLoadingProducts(false)
        }
    }

    useEffect(() => {
        loadProducts();
    }, [])

    const filteredProducts = useMemo(() => {
        return products.filter(product => {

            const categoryMatch = selectedCategory === 'Tous' ||
                product.type?.toLowerCase() === selectedCategory.toLowerCase();

            const searchMatch = searchTerm === '' ||
                product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchTerm.toLowerCase());

            return categoryMatch && searchMatch;
        });
    }, [products, selectedCategory, searchTerm])

    const categories: ProductCategory[] = [
        'Tous', 'Électrique', 'Thermique', 'Climatisation', 'Ventilation', 'Froid'
    ]

    return (
        <div className='pt-15 md:pt-5 min-h-screen'>
            <div className='fixed bg-base-100 top-0 left-0 w-screen h-40 sm:h-0'>
                <NavWiew />

                {/* Barre de navigation avec filtres et recherche */}
                <nav className='fixed sm:bg-base-100 sm:shadow-md top-4 w-7/10 md:w-10/11 left-20 sm:flex sm:flex-row items-start sm:items-center justify-between h-auto sm:h-12 rounded-xl p-2 sm:p-4 z-10 gap-4 sm:gap-0'>
                    {/* Filtres par catégorie - Desktop & Mobile */}
                    <div className='w-full sm:w-auto'>
                        {/* Version Desktop - Onglets horizontaux */}
                        <div className='hidden sm:flex items-center space-x-4'>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-accent text-accent-content'
                                        : 'border border-accent shadow-sm'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Barre de recherche */}
                    <div className='flex items-center w-full sm:w-auto'>
                        <div className='relative flex-1 sm:flex-initial'>
                            <input
                                type='text'
                                placeholder='Rechercher un produit...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='input focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full sm:w-64'
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-content/40 hover:text-accent-content/60'
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </nav>

                <div className='sm:hidden fixed top-20 w-6/7 left-1/2 transform -translate-x-1/2 items-center grid grid-cols-3 gap-3'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === category
                                ? 'bg-accent text-accent-content'
                                : 'border border-accent shadow-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Contenu principal */}
            <div className='container mx-auto px-4 pt-32 sm:pt-20 pb-8'>
                {isLoadingProducts ? (
                    // État de chargement
                    <div className='flex justify-center items-center py-12'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    // Aucun produit trouvé
                    <div className='text-center py-12'>
                        <div className='text-gray-500 text-lg mb-4'>
                            {products.length === 0 ? 'Aucun produit disponible' : 'Aucun produit ne correspond à votre recherche'}
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => {
                                    setSearchTerm('')
                                    setSelectedCategory('Tous')
                                }}
                                className='px-6 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary-focus transition-colors'
                            >
                                Réinitialiser les filtres
                            </button>
                        )}
                    </div>
                ) : (
                    // Liste des produits
                    <>
                        {/* Compteur de résultats */}
                        <div className='mb-6 text-sm text-gray-600'>
                            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                            {(selectedCategory !== 'Tous' || searchTerm) && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('')
                                        setSelectedCategory('Tous')
                                    }}
                                    className='ml-2 text-primary hover:text-primary-focus underline'
                                >
                                    Réinitialiser
                                </button>
                            )}
                        </div>

                        {/* Grille de produits */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {filteredProducts.map((product) => (
                                <ProductsCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default Products