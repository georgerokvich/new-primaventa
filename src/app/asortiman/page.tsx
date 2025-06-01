import React from 'react'
import { Header } from '@/components/sections/header'
import { ProductCatalog } from '@/components/sections/product-catalog'

export default function AsortimentPage() {
  return (
    <div className="bg-[#1B365D]">
      <Header />
      <ProductCatalog />
    </div>
  )
}
