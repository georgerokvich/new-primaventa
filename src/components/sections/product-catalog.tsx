'use client'

import React, { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { productCategories } from '@/data/product-categories'
import { allProducts } from '@/data/sample-products'

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      
      return matchesCategory && matchesSubcategory && matchesSearch
    })
  }, [selectedCategory, selectedSubcategory, searchTerm])

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory)

  return (
    <div className="relative min-h-screen w-full bg-[#1B365D]">
      {/* Header Section */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                Naš <span className="text-[#C5A572]">Asortiman</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C5A572] to-transparent mx-auto" />
            </div>
            
            <p className="font-montserrat text-lg text-white/90 max-w-2xl mx-auto">
              Kompletna ponuda vrhunskih namirnica za uspešno ugostiteljstvo
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C5A572] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Pretražite proizvode..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#C5A572] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedSubcategory('all')
                }}
                className={`px-4 py-3 rounded-lg font-montserrat text-sm transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#C5A572] text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Sve Kategorije
              </button>
              
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setSelectedSubcategory('all')
                  }}
                  className={`px-4 py-3 rounded-lg font-montserrat text-sm transition-colors flex items-center justify-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#C5A572] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="truncate">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory Filter */}
          {currentCategory?.subcategories && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className={`px-3 py-2 rounded-md font-montserrat text-sm transition-colors ${
                    selectedSubcategory === 'all'
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  Sve Podkategorije
                </button>
                
                {currentCategory.subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`px-3 py-2 rounded-md font-montserrat text-sm transition-colors ${
                      selectedSubcategory === subcategory
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/8 border border-white/15 rounded-lg overflow-hidden hover:bg-white/12 transition-colors"
              >
                {/* Product Header */}
                <div className="h-20 bg-gradient-to-br from-[#C5A572]/15 to-[#C5A572]/5 flex items-center justify-center border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">
                      {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                    </span>
                    <span className="px-2 py-1 bg-[#C5A572]/20 text-[#C5A572] text-xs font-montserrat rounded">
                      {product.unit}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4">
                  <h3 className="font-montserrat text-base font-semibold text-white mb-2 leading-tight">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="font-montserrat text-sm text-white/70 mb-3 leading-relaxed">
                      {product.description}
                    </p>
                  )}
                  {product.subcategory && (
                    <span className="inline-block px-2 py-1 bg-white/5 text-white/60 text-xs font-montserrat rounded">
                      {product.subcategory}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-montserrat text-xl text-white/60">
                Nema proizvoda koji odgovaraju vašoj pretragama
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
