import type { Product } from './product-categories'

// This file is kept for compatibility but the main products are now in products.ts
// which imports from all the individual category files
export const allProducts: Product[] = [
  {
    id: 'sample-1',
    name: 'Sample Product',
    description: 'This is a sample product for testing',
    unit: 'KOM',
    category: 'mlecni-proizvodi',
    subcategory: 'Mleko, pavlake,maslac',
    sku: 'SAMPLE-001'
  }
]
