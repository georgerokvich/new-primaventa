export interface Product {
  id: string
  name: string
  description?: string
  unit: string
  category: string
  subcategory?: string
}

export interface ProductCategory {
  id: string
  name: string
  icon: string
  subcategories?: string[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'mlecni-proizvodi',
    name: 'Mleko i Mlečni Proizvodi',
    icon: '🥛',
    subcategories: ['Pavlake i Maslac', 'Meki Sirevi i Kajmak', 'Polutvrdi i Tvrdi Sirevi', 'Dimljeni Sirevi', 'Plavi Sirevi', 'Biljni Sirevi']
  },
  {
    id: 'mesnati-suhomesnati',
    name: 'Mesnati i Suhomesnati Proizvodi',
    icon: '🥩',
    subcategories: ['Sunka', 'Dimljena Pečenica i Slanina', 'Kulen i Budimska', 'Suvi Delikatesi', 'Sveže Meso']
  },
  {
    id: 'testenine-pirinac',
    name: 'Testenine i Pirinač',
    icon: '🍝'
  },
  {
    id: 'ostale-namirnice',
    name: 'Ostale Namirnice',
    icon: '🌿',
    subcategories: ['Začini i Zrnasti Proizvodi', 'Sosevi Suvi', 'Ulja', 'Sirće i Kreme']
  }
]
,
  {
    id: 'proizvodi-brasna',
    name: 'Proizvodi od Brašna',
    icon: '🍞',
    subcategories: ['Hleb i Tortilje', 'Pirinač']
  },
  {
    id: 'konzervirani-proizvodi',
    name: 'Konzervirani Proizvodi',
    icon: '🥫',
    subcategories: ['Maslina i Povrće', 'Ostali Konzervirani Proizvodi']
  },
  {
    id: 'sosevi',
    name: 'Sosevi',
    icon: '🍯',
    subcategories: ['Pesto i BBQ', 'Majonez i Senf', 'Pelat i Proizvodi od Paradajza']
  },
  {
    id: 'slatki-program',
    name: 'Slatki Program',
    icon: '🧁',
    subcategories: ['Kremovi', 'Čokolade', 'Prelivi', 'Kandirano Voće', 'Apetisani i Orasasti']
  }
]
  ,
  {
    id: 'proizvodi-brasna',
    name: 'Proizvodi od Brašna',
    icon: '🍞',
    subcategories: ['Hleb i Tortilje', 'Pirinač']
  },
  {
    id: 'ulja-sirce',
    name: 'Ulja i Sirće',
    icon: '🫒',
    subcategories: ['Ulja', 'Sirće i Kreme']
  },
  {
    id: 'konzervirani-proizvodi',
    name: 'Konzervirani Proizvodi',
    icon: '🥫',
    subcategories: ['Maslina i Povrće', 'Ostali Konzervirani Proizvodi']
  },
  {
    id: 'sosevi',
    name: 'Sosevi',
    icon: '🍯',
    subcategories: ['Pesto i BBQ', 'Majonez i Senf', 'Pelat i Proizvodi od Paradajza']
  },
  {
    id: 'slatki-program',
    name: 'Slatki Program',
    icon: '🧁',
    subcategories: ['Kremovi', 'Čokolade', 'Prelivi', 'Kandirano Voće', 'Apetisani i Orasasti']
  },
  {
    id: 'ostalo',
    name: 'Ostalo',
    icon: '📦'
  }
]