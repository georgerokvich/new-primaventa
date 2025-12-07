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
      'Pavlake,maslac',
      'Meki sirevI, kajmak', 
      'Polutvrdi I tvrdi sirevi',
      'Dimljeni sirevi, gril sir',
      'Plavi sirevi'
    ]
  },
  {
    id: 'mesnati-suhomesnati',
    name: 'MESNATI I SUHOMESNATI PROIZVODI',
    icon: '🥓',
    subcategories: [
      'Zamrznuta piletina, svinjsko meso',
      'Kobasice',
      'Šunka',
      'Dimljena pecenica ,slanina',
      'Kulen, Budimska'
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
      'PANČETA  narezana'
    ]
  },
  {
    id: 'juneci-burgeri',
    name: 'JUNECI BURGERI',
    icon: '🍔'
  },
  {
    id: 'zaledjeni-krompir',
    name: 'ZALEDJENI PROIZVODI OD KROMPIRA',
    icon: '🥔'
  },
  {
    id: 'testenine',
    name: 'TESTENINE',
    icon: '🍝',
    subcategories: [
      'Pasta Riscossa Italijana',
      'Granoro',
      'Barilla'
    ]
  },
  {
    id: 'ostale-namirnice',
    name: 'OSTALE NAMIRNICE',
    icon: '🌿',
    subcategories: [
      'Zacini I zrnasti proizvodi'
    ]
  },
  {
    id: 'moguntia-food-group',
    name: 'MOGUNTIA FOOD GROUP',
    icon: '🏭',
    subcategories: [
      'Sosevii suvi, pire krompir',
      'Zacini'
    ]
  },
  {
    id: 'proizvodi-brasna',
    name: 'PROIZVODI OD BRAŠNA',
    icon: '🍞'
  },
  {
    id: 'pirinac',
    name: 'PIRINAČ',
    icon: '🌾'
  },
  {
    id: 'ulja',
    name: 'ULJA',
    icon: '🫒'
  },
  {
    id: 'sirce-kreme',
    name: 'SIRĆE, KREME',
    icon: '🍯'
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
      'SIPRAL  krem i paste',
      'PMF krem I paste',
      'Keks',
      'Prelivi  sa vecom gustinom  PMF',
      'Toping vise vrsta',
      'DEKORACIJE'
    ]
  },
  {
    id: 'cokolada',
    name: 'ČOKOLADA I PROIZVODI OD ČOKOLADE',
    icon: '🍫',
    subcategories: [
      'SIPRAL ITALIJANSKA ČOKOLADA RUCNO IZRADJENA',
      'ČOKOLADA SA MANJIM PROCENTOM KAKAA',
      'Apetisani, Orasasti proizvodi'
    ]
  },
  {
    id: 'hleb-peciva',
    name: 'HLEB I PECIVA',
    icon: '🥖',
    subcategories: [
      'HLEB , KRASANI,ZEMICKE',
      'PITE',
      'BURGER ZEMICKE'
    ]
  },
  {
    id: 'ostalo',
    name: 'OSTALO',
    icon: '📦'
  }
]
