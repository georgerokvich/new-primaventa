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
    name: 'MESNATI I SUHOMESNATI PROIZVODI',
    icon: '🥓',
    subcategories: [
      'Sunka',
      'Dimljena pecenica ,slanina',
      'Kulen, Budimska, Piletina dimljena'
    ]
  },
  {
    id: 'suvi-delikates',
    name: 'SUVI DELIKATES PROIZVODI',
    icon: '🍖',
    subcategories: [
      'VRAT SUVI komad , narezani',
      'PECENICA SUVA komad, slajs',
      'PRSUT govedja, njeguska komad,narezani',
      'PANČETA narezana'
    ]
  },
  {
    id: 'sveze-meso',
    name: 'SVEZE MESO',
    icon: '🥩',
    subcategories: ['SVEZA TELETINA VAKUM']
  },
  {
    id: 'zaledjeni-krompir',
    name: 'ZALEDJENI PROIZVODI OD KROMPIRA',
    icon: '🥔'
  },
  {
    id: 'juneci-burgeri',
    name: 'JUNECI BURGERI',
    icon: '🍔'
  },
  {
    id: 'testenine',
    name: 'TESTENINE',
    icon: '🍝'
  },
  {
    id: 'ostale-namirnice',
    name: 'OSTALE NAMIRNICE',
    icon: '🌿',
    subcategories: [
      'Zacini i zrnasti proizvodi',
      'Sosevi suvi, pire krompir',
      'Zacini'
    ]
  },
  {
    id: 'proizvodi-brasna',
    name: 'PROIZVODI OD BRAŠNA',
    icon: '🍞',
    subcategories: [
      'Pirinač',
      'Ulja',
      'Sirće, kreme'
    ]
  },
  {
    id: 'konzervirani-proizvodi',
    name: 'KONZERVIRANI PROIZVODI',
    icon: '🥫',
    subcategories: [
      'Konzervirani proizvodi',
      'Ostali proizvodi šire primene'
    ]
  },
  {
    id: 'sosevi',
    name: 'SOSEVI',
    icon: '🍯',
    subcategories: [
      'Majonez, senf',
      'Pelat, proizvodi od paradajza'
    ]
  },
  {
    id: 'slatki-program',
    name: 'SLATKI PROGRAM',
    icon: '🧁',
    subcategories: [
      'Kremovi',
      'ČOKOLADE SA MANJIM PROCENTOM KAKAO DELOVA',
      'SIPRAL kremi paste',
      'PMF krem i paste',
      'kandirano voće ,voćna punjenja,nadevi',
      'Keks i kadaif',
      'Namenske gotve smese, slag',
      'Prelivi sa većom gustinom PMF',
      'Toping više vrsta',
      'Apetisani, Orasasti proizvodi'
    ]
  },
  {
    id: 'ostalo',
    name: 'OSTALO',
    icon: '📦'
  }
]
