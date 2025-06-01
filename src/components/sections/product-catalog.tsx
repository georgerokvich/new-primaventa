'use client'

import React, { useState, useMemo } from 'react'
import { Search, Grid, List } from 'lucide-react'
import { productCategories } from '@/data/product-categories'
import { allProducts } from '@/data/products'

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['all']))
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      
      return matchesCategory && matchesSubcategory && matchesSearch
    })
  }, [selectedCategory, selectedSubcategory, searchTerm])

  const getProductCount = (categoryId: string, subcategory?: string) => {
    if (categoryId === 'all') return allProducts.length
    return allProducts.filter(product => {
      const matchesCategory = product.category === categoryId
      const matchesSubcategory = !subcategory || product.subcategory === subcategory
      return matchesCategory && matchesSubcategory
    }).length
  }

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <div className="flex min-h-screen bg-[#1B365D]">
      {/* Add fadeIn animation and scrollbar CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(197, 165, 114, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 165, 114, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 165, 114, 0.5);
        }
      `}</style>

      {/* Premium Sidebar - Redesigned */}
      <div className="w-80 bg-gradient-to-b from-[#1B365D] to-[#162e52] border-r border-[#C5A572]/10 flex flex-col sticky top-0 h-screen overflow-hidden shadow-2xl">
        {/* Sidebar Header */}
        <div className="px-6 py-8 border-b border-[#C5A572]/20 bg-[#1B365D]/50 backdrop-blur-sm">
          <h2 className="font-playfair text-2xl font-bold text-[#C5A572] mb-2">
            Kategorije Proizvoda
          </h2>
          <p className="font-montserrat text-sm text-white/70 leading-relaxed">
            Izaberite kategoriju za pretraživanje
          </p>
        </div>

        {/* Category Navigation - Custom Scrollbar */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3 custom-scrollbar">

          {/* All Products */}
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSelectedSubcategory('all')
            }}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 border ${
              selectedCategory === 'all'
                ? 'bg-[#C5A572] text-white border-[#C5A572] shadow-md'
                : 'bg-[#1B365D]/30 text-white/90 hover:bg-[#C5A572]/10 border-white/10 hover:border-[#C5A572]/30'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-lg">📦</span>
              </div>
              <span className="font-montserrat text-sm font-medium">Svi Proizvodi</span>
            </div>
            <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${
              selectedCategory === 'all'
                ? 'bg-white/20 text-white'
                : 'bg-[#C5A572]/20 text-[#C5A572]'
            }`}>
              {getProductCount('all')}
            </div>
          </button>

          {/* Category List */}
          {productCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.id)
            const isSelected = selectedCategory === category.id
            
            return (
              <div key={category.id} className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setSelectedSubcategory('all')
                    toggleCategory(category.id)
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#C5A572] text-white border-[#C5A572] shadow-md'
                      : 'bg-[#1B365D]/30 text-white/90 hover:bg-[#C5A572]/10 border-white/10 hover:border-[#C5A572]/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <span className="text-lg">{category.icon}</span>
                    </div>
                    <span className="font-montserrat text-sm font-medium text-left">
                      {category.name}
                    </span>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[#C5A572]/20 text-[#C5A572]'
                  }`}>
                    {getProductCount(category.id)}
                  </div>
                </button>

                {/* Subcategories */}
                {category.subcategories && isExpanded && (
                  <div className="ml-6 space-y-1 animate-fadeIn">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setSelectedSubcategory(subcategory)
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                          selectedSubcategory === subcategory && selectedCategory === category.id
                            ? 'bg-[#C5A572]/20 text-white border border-[#C5A572]/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-white/90'
                        }`}
                      >
                        <span className="font-montserrat text-sm">{subcategory}</span>
                        <div className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                          selectedSubcategory === subcategory && selectedCategory === category.id
                            ? 'bg-[#C5A572]/30 text-white'
                            : 'bg-white/10 text-white/60'
                        }`}>
                          {getProductCount(category.id, subcategory)}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1B365D] to-[#2A4B73] border-b border-[#C5A572]/20 px-8 py-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-playfair text-4xl font-bold text-white mb-3 tracking-wide">
                Naš <span className="text-[#C5A572]">Asortiman</span>
              </h1>
              <p className="font-montserrat text-white/80 text-lg">
                {filteredProducts.length} proizvoda dostupno
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* View Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1.5 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-[#C5A572] text-white shadow-sm'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-[#C5A572] text-white shadow-sm'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C5A572] w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Pretražite proizvode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm border-2 border-[#C5A572]/30 rounded-lg text-[#1B365D] placeholder-gray-500 focus:outline-none focus:border-[#C5A572] focus:ring-2 focus:ring-[#C5A572]/20 transition-all shadow-lg text-base"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-white">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:bg-gray-50 hover:border-[#C5A572]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A572]/10"
                >
                  {/* Square Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl mb-2 block opacity-60 text-[#1B365D]">
                          {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                        </span>
                        <span className="text-xs text-gray-500 font-montserrat">
                          Slika proizvoda
                        </span>
                      </div>
                    </div>
                    
                    {/* Unit Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-[#C5A572] text-white text-xs font-montserrat rounded-full shadow-sm">
                        {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-montserrat text-sm font-semibold text-[#1B365D] mb-3 leading-tight line-clamp-2 group-hover:text-[#C5A572] transition-colors">
                      {product.name}
                    </h3>
                    
                    {product.description && (
                      <p className="font-montserrat text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    )}
                    
                    {product.subcategory && (
                      <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-montserrat rounded-full">
                        {product.subcategory}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:bg-gray-50 hover:border-[#C5A572]/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    {/* Square Thumbnail */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl opacity-60 text-[#1B365D]">
                        {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                      </span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-montserrat text-lg font-semibold text-[#1B365D] mb-2">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="font-montserrat text-sm text-gray-600 mb-3 leading-relaxed">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1.5 bg-[#C5A572] text-white text-xs font-montserrat rounded-full">
                          {product.unit}
                        </span>
                        {product.subcategory && (
                          <span className="text-sm text-gray-500">
                            {product.subcategory}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-30">🔍</div>
              <h3 className="font-playfair text-xl text-gray-600 mb-2">
                Nema rezultata
              </h3>
              <p className="font-montserrat text-gray-500">
                Nema proizvoda koji odgovaraju vašoj pretraži
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
