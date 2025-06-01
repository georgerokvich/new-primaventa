export interface Product {
  id: string
  name: string
  description?: string
  unit: string
  category: string
  subcategory?: string
  sku?: string
}

export interface ProductCategory {
  id: string
  name: string
  icon: string
  subcategories?: string[]
}

// Import all product data
import { mlecniProizvodi } from './mlecni-proizvodi'
import { mesnatiSuhomesnatiProizvodi } from './mesnati-suhomesnati'
import { suviDelikatesProizvodi } from './suvi-delikates'
import { svezeMesoProizvodi, zaledjeniKrompirProizvodi, juneciBurgeriProizvodi } from './ostali-proizvodi'
import { testenineProizvodi } from './testenine'
import { ostaleNamirniceProizvodi } from './ostale-namirnice'
import { proizvodiBrasnaProizvodi } from './proizvodi-brasna'
import { konzerviraniProizvodiProizvodi } from './konzervirani-proizvodi'
import { soseviProizvodi } from './sosevi'
import { slatkiProgramProizvodi } from './slatki-program'
import { ostaloProizvodi } from './ostalo'

// Export all products combined
export const allProducts: Product[] = [
  ...mlecniProizvodi,
  ...mesnatiSuhomesnatiProizvodi,
  ...suviDelikatesProizvodi,
  ...svezeMesoProizvodi,
  ...zaledjeniKrompirProizvodi,
  ...juneciBurgeriProizvodi,
  ...testenineProizvodi,
  ...ostaleNamirniceProizvodi,
  ...proizvodiBrasnaProizvodi,
  ...konzerviraniProizvodiProizvodi,
  ...soseviProizvodi,
  ...slatkiProgramProizvodi,
  ...ostaloProizvodi
]

// Re-export product categories from the separate file
export { productCategories } from './product-categories'
