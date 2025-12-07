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
import { juneciBurgeriProizvodi } from './juneci-burgeri'
import { zaledjeniKrompirProizvodi } from './zaledjeni-krompir'
import { testenineProizvodi } from './testenine'
import { ostaleNamirniceProizvodi } from './ostale-namirnice'
import { moguntiaFoodGroupProizvodi } from './moguntia-food-group'
import { proizvodiBrasnaProizvodi } from './proizvodi-brasna'
import { pirinacProizvodi } from './pirinac'
import { uljaProizvodi } from './ulja'
import { sirceKremeProizvodi } from './sirce-kreme'
import { konzerviraniProizvodiProizvodi } from './konzervirani-proizvodi'
import { soseviProizvodi } from './sosevi'
import { slatkiProgramProizvodi } from './slatki-program'
import { cokoladaProizvodi } from './cokolada'
import { hlebPecivaProizvodi } from './hleb-peciva'
import { ostaloProizvodi } from './ostalo'

// Export all products combined
export const allProducts: Product[] = [
  ...mlecniProizvodi,
  ...mesnatiSuhomesnatiProizvodi,
  ...suviDelikatesProizvodi,
  ...juneciBurgeriProizvodi,
  ...zaledjeniKrompirProizvodi,
  ...testenineProizvodi,
  ...ostaleNamirniceProizvodi,
  ...moguntiaFoodGroupProizvodi,
  ...proizvodiBrasnaProizvodi,
  ...pirinacProizvodi,
  ...uljaProizvodi,
  ...sirceKremeProizvodi,
  ...konzerviraniProizvodiProizvodi,
  ...soseviProizvodi,
  ...slatkiProgramProizvodi,
  ...cokoladaProizvodi,
  ...hlebPecivaProizvodi,
  ...ostaloProizvodi
]

// Re-export product categories from the separate file
export { productCategories } from './product-categories'
