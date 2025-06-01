import type { Product } from './product-categories'

// Complete product catalog based on Prima Venta PDF catalog from 01.06.2025
export const allProducts: Product[] = [
  // MLEČNI PROIZVODI - Mleko, pavlake, maslac
  { 
    id: '0377', 
    sku: '0377',
    name: 'MLEKO MEGGLE 2,8%m.m SA ČEPOM', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: '0081', 
    sku: '0081',
    name: 'KISELA PAVLAKA 20% mm KANTICA 2 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: '0001', 
    sku: '00 01',
    name: 'NEUTRALNA PAVLAKA PROFESIONAL ARUM 1L (12/1#)', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: '0250', 
    sku: '0250',
    name: 'SLATKA PAVLAKA FINE & DELI WHIPPING CREME 25% 1L', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: '0520a', 
    sku: '0520',
    name: 'HOTELSKI MASLAC LURPAK 8 GR (120 kom/ #)', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: 'maslac-burro', 
    name: 'MASLAC BURRO MICCA 1 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },
  { 
    id: '0519', 
    sku: '0519',
    name: 'BISER TOPLJENI SIR 140 GR (20 kom/ #)', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Mleko, pavlake, maslac'
  },

  // MLEČNI PROIZVODI - Meki sirevi, kajmak
  {
    id: '0265', 
    sku: '0265',
    name: 'BURATA ZANETTI 150 GR', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0518a', 
    sku: '0518',
    name: 'BISER VAJKREM 250 GR', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0516', 
    sku: '0516',
    name: 'FETA SIR 1 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0498', 
    sku: '0498',
    name: 'MOZZARELLA BUFFALO SVEŽA 250 GR', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0501', 
    sku: '0501',
    name: 'MOZZARELLA 125 gr', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0507', 
    sku: '0507',
    name: 'SJENIČKI PUNOMASNI SIR 5 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0506', 
    sku: '0506',
    name: 'ZLATIBORSKI ZRELI SIR 5 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0518b', 
    sku: '0518',
    name: 'MLADI KAJMAK 3 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },
  { 
    id: '0505', 
    sku: '0505',
    name: 'SJENIČKI KAJMAK ZRELI 3 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Meki sirevi, kajmak'
  },

  // MLEČNI PROIZVODI - Polutvrdi i tvrdi sirevi  { 
    id: '0003', 
    sku: '00 03',
    name: 'MOZZARELA CAPONE 35% cca 1.4 kg', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0420', 
    sku: '0420',
    name: 'MOZZARELA REGINA 49% mm cca 1,5 KG', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0485', 
    sku: '0485',
    name: 'MOZZARELLA BLOK 10 KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0002', 
    sku: '00 02',
    name: 'GRAN SPICO 32% mm cca 2 KG', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0073', 
    sku: '00 73',
    name: 'FORMAGIO RENDANI PARMEZAN ZANETTI 32% mm 1 KG', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0352', 
    sku: '0352',
    name: 'GRANELO MIX RIBANI SIR U KONZERVI 32% mm 1KG', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0469', 
    sku: '0469',
    name: 'GRANELO MIX RIBANI 1 KG KESA', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0186', 
    sku: '0186',
    name: 'SIR CHEDDAR U KOMADU cca 2 KG', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0077', 
    sku: '00 77',
    name: 'CHEDAR LISTIĆI 1033 GR', 
    unit: 'KOM', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0258', 
    sku: '0258',
    name: 'GAUDA AMERLANDER 48% cca 3 kg', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },
  { 
    id: '0259', 
    sku: '0259',
    name: 'KAČKAVALJ BISER 45 % mm cca 1,2 KG', 
    unit: 'KG', 
    category: 'mlecni-proizvodi', 
    subcategory: 'Polutvrdi i tvrdi sirevi'
  },

  // MLEČNI PROIZVODI - Dimljeni sirevi, gril sir