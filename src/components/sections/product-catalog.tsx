'use client'

import React, { useState, useMemo } from 'react'
import { Search, Filter, Grid, List, ChevronRight, ChevronDown } from 'lucide-react'
import { productCategories } from '@/data/product-categories'
import { allProducts } from '@/data/sample-products'

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Premium Sidebar */}
      <div className="w-80 bg-[#1B365D] border-r border-[#C5A572]/20 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-[#C5A572]/20">
          <h2 className="font-playfair text-xl font-bold text-[#C5A572] mb-2">
            Kategorije Proizvoda
          </h2>
          <p className="font-montserrat text-sm text-white/70">
            Izaberite kategoriju za pretraživanje
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* All Products */}
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSelectedSubcategory('all')
            }}
            className={`w-full flex items-center justify-between p-3 rounded-lg mb-2 transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#C5A572] text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">📦</span>
              <span className="font-montserrat text-sm font-medium">Svi Proizvodi</span>
            </div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              {getProductCount('all')}
            </span>
          </button>

          {/* Category List */}
          {productCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.id)
            const isSelected = selectedCategory === category.id
            
            return (
              <div key={category.id} className="mb-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setSelectedSubcategory('all')
                    toggleCategory(category.id)
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-[#C5A572] text-white'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-montserrat text-sm font-medium truncate">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {getProductCount(category.id)}
                    </span>
                    {category.subcategories && (
                      isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Subcategories */}
                {category.subcategories && isExpanded && (
                  <div className="ml-6 mt-2 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setSelectedSubcategory(subcategory)
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-md text-left transition-colors ${
                          selectedSubcategory === subcategory && selectedCategory === category.id
                            ? 'bg-[#C5A572]/30 text-white'
                            : 'text-white/60 hover:bg-white/5 hover:text-white/80'
                        }`}
                      >
                        <span className="font-montserrat text-xs">{subcategory}</span>
                        <span className="text-xs text-white/40">
                          {getProductCount(category.id, subcategory)}
                        </span>
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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-playfair text-3xl font-bold text-[#1B365D] mb-2">
                Naš <span className="text-[#C5A572]">Asortiman</span>
              </h1>
              <p className="font-montserrat text-gray-600">
                {filteredProducts.length} proizvoda dostupno
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#C5A572] text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-[#C5A572] text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pretražite proizvode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Square Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl mb-2 block opacity-60">
                          {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                        </span>
                        <span className="text-xs text-gray-400 font-montserrat">
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
                  <div className="p-4">
                    <h3 className="font-montserrat text-sm font-semibold text-[#1B365D] mb-2 leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {product.description && (
                      <p className="font-montserrat text-xs text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    {product.subcategory && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-montserrat rounded-full">
                        {product.subcategory}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    {/* Square Thumbnail */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl opacity-60">
                        {productCategories.find(cat => cat.id === product.category)?.icon || '📦'}
                      </span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-montserrat text-base font-semibold text-[#1B365D] mb-1">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="font-montserrat text-sm text-gray-600 mb-2">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-[#C5A572] text-white text-xs font-montserrat rounded-full">
                          {product.unit}
                        </span>
                        {product.subcategory && (
                          <span className="text-xs text-gray-500">
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
