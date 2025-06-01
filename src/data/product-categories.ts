export interface Product {
  id: string
  name: string
  description?: string
  unit: string
  category: string
  subcategory?: string
  sku?: string
  priceWithoutVAT?: number
  vat?: string
  priceWithVAT?: number
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
    name: 'MLEČNI PROIZVODI',
    icon: '🥛',
    subcategories: [
      'Mleko, pavlake,maslac',
      'Meki sirevi, kajmak', 
      'Polutvrdi i tvrdi sirevi',
      'Dimljeni sirevi, gril sir',
      'Plavi sirevi',
      'Biljni sirev,polubiljni'
    ]
  },
  {
    id: 'mesnati-suhomesnati',
    name: 'Mesnati i Suhomesnati Proizvodi',
    icon: '🥓',
    subcategories: [
      'Sunka',
      'Dimljena pečenica, slanina',
      'Kulen, Budimska, Piletina dimljena'
    ]
  },
  {
    id: 'suvi-delikates',
    name: 'Suvi Delikates Proizvodi',
    icon: '🍖',
    subcategories: [
      'VRAT SUVI komad, narezani',
      'PEČENICA SUVA komad, slajs',
      'PRŠUT govedja, njeguska komad, narezani',
      'PANČETA narezana'
    ]
  },
  {
    id: 'sveze-meso',
    name: 'Sveže Meso',
    icon: '🥩',
    subcategories: ['SVEŽA TELETINA VAKUM']
  },
  {
    id: 'zaledjeni-krompir',
    name: 'Zaledјeni Proizvodi od Krompira',
    icon: '🥔'
  },
  {
    id: 'juneci-burgeri',
    name: 'Juneći Burgeri',
    icon: '🍔'
  },
  {
    id: 'testenine',
    name: 'Testenine',
    icon: '🍝'
  },
  {
    id: 'ostale-namirnice',
    name: 'Ostale Namirnice',
    icon: '🌿',
    subcategories: [
      'Začini i zrnasti proizvodi',
      'Sosevi suvi, pire krompir',
      'Začini'
    ]
  },
  {
    id: 'proizvodi-brasna',
    name: 'Proizvodi od Brašna',
    icon: '🍞',
    subcategories: [
      'Pirinač',
      'Ulja',
      'Sirće, kreme'
    ]
  },
  {
    id: 'konzervirani-proizvodi',
    name: 'Konzervirani Proizvodi',
    icon: '🥫',
    subcategories: ['Konzervirani proizvodi']
  },
  {
    id: 'sosevi',
    name: 'Sosevi',
    icon: '🍯',
    subcategories: [
      'Majonez, senf',
      'Pelat, proizvodi od paradajza'
    ]
  },
  {
    id: 'slatki-program',
    name: 'Slatki Program',
    icon: '🧁',
    subcategories: [
      'Kremovi',
      'Čokolade sa manjim procentom kakao delova',
      'SIPRAL kremi paste',
      'PMF krem i paste',
      'kandirano voće, voćna punjenja, nadevi',
      'Keks i kadaif',
      'Namenske gotove smese, slag',
      'Prelivi sa većom gustinom PMF',
      'Toping više vrsta',
      'Apetisani, Orasasti proizvodi'
    ]
  },
  {
    id: 'ostalo',
    name: 'Ostalo',
    icon: '📦'
  }
]
