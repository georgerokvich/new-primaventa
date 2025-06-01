import React from 'react'
import { Header } from '@/components/sections/header'
import { ProductCatalog } from '@/components/sections/product-catalog'

export default function AsortimentPage() {
  return (
    <div className="relative w-full bg-white">
      <Header />
      <ProductCatalog />
    </div>
  )
}
