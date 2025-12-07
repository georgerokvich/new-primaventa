import * as fs from 'fs';
import * as path from 'path';

interface Product {
  id: string;
  name: string;
  description?: string;
  unit: string;
  category: string;
  subcategory?: string;
  sku?: string;
}

// Mapping from PDF section headings to category IDs
const categoryMapping: Record<string, string> = {
  'MLECNI PROIZVODI': 'mlecni-proizvodi',
  'MESO,  MESNATI I SUHOMESNATI PROIZVODI': 'mesnati-suhomesnati',
  'SUVI DELIKATES PROIZVODI': 'suvi-delikates',
  'JUNECI BURGERI': 'juneci-burgeri',
  'ZAMRZNUTI PROIZVODI OD KROMPIRA': 'zaledjeni-krompir',
  'TESTENINE': 'testenine',
  'OSTALE NAMIRNICE': 'ostale-namirnice',
  'MOGUNTIA FOOD GROUP  Flavoursome solutions sinse 1903': 'moguntia-food-group',
  'PROIZVODI OD BRASNA': 'proizvodi-brasna',
  'Pirinač': 'pirinac',
  'ULjA': 'ulja',
  'Sirće, kreme': 'sirce-kreme',
  'KONZERVIRANI PROIZVODI': 'konzervirani-proizvodi',
  'SOSEV': 'sosevi',
  'POSLASTICARSTVO  I SLATKI PROGRAM': 'slatki-program',
  'OSTALO': 'ostalo',
  'HLEB I PECIVA': 'proizvodi-brasna', // Bread and pastries go to proizvodi-brasna
};

// Subcategory mapping
const subcategoryMapping: Record<string, Record<string, string>> = {
  'mlecni-proizvodi': {
    'Pavlake,maslac': 'Mleko, pavlake,maslac',
    'SIREVI': 'Meki sirevi, kajmak',
    'Meki sirevI, kajmak': 'Meki sirevi, kajmak',
    'Polutvrdi I tvrdi sirevi': 'Polutvrdi i tvrdi sirevi',
    'Dimljeni sirevi, gril sir': 'Dimljeni sirevi, gril sir',
    'Plavi sirevi': 'Plavi sirevi',
  },
  'mesnati-suhomesnati': {
    'Zamrznuta piletina, svinjsko meso': 'Sveze meso',
    'Kobasice': 'Kobasice',
    'Šunka': 'Sunka',
    'Dimljena pecenica ,slanina': 'Dimljena pecenica ,slanina',
    'Kulen, Budimska': 'Kulen, Budimska',
  },
  'suvi-delikates': {
    'VRAT SUVI komad , narezani': 'VRAT SUVI komad , narezani',
    'PECENICA SUVA komad, slajs': 'PECENICA SUVA komad, slajs',
    'PRSUT govedja, njeguska komad,narezani': 'PRSUT govedja, njeguska komad,narezani',
    'PANČETA  narezana': 'PANČETA narezana',
  },
  'ostale-namirnice': {
    'Zacini I zrnasti proizvodi': 'Zacini i zrnasti proizvodi',
  },
  'moguntia-food-group': {
    'Sosevii suvi, pire krompir': 'Sosevi suvi, pire krompir',
    'Zacini': 'Zacini',
  },
  'konzervirani-proizvodi': {
    'Konzervirani proizvodi': 'Konzervirani proizvodi',
    'Ostali proizvodi šire primene': 'Ostali proizvodi šire primene',
  },
  'sosevi': {
    'Majonez, senf': 'Majonez, senf',
    'Pelat, proizvodi od paradajza': 'Pelat, proizvodi od paradajza',
  },
  'slatki-program': {
    'Kremovi': 'Kremovi',
    'SIPRAL  krem i paste': 'SIPRAL kremi paste',
    'PMF krem I paste': 'PMF krem i paste',
    'Keks': 'Keks i kadaif',
    'Prelivi  sa vecom gustinom  PMF': 'Prelivi sa većom gustinom PMF',
    'Toping vise vrsta': 'Toping više vrsta',
    'DEKORACIJE': 'kandirano voće ,voćna punjenja,nadevi',
    'ČOKOLADA I PROIZVODI OD ČOKOLADE': 'ČOKOLADE SA MANJIM PROCENTOM KAKAO DELOVA',
    'SIPRAL ITALIJANSKA ČOKOLADA RUCNO IZRADJENA': 'ČOKOLADE SA MANJIM PROCENTOM KAKAO DELOVA',
    'ČOKOLADA SA MANJIM PROCENTOM KAKAA': 'ČOKOLADE SA MANJIM PROCENTOM KAKAO DELOVA',
    'Apetisani, Orasasti proizvodi': 'Apetisani, Orasasti proizvodi',
  },
  'proizvodi-brasna': {
    'HLEB , KRASANI,ZEMICKE': 'Hleb',
    'PITE': 'Pite',
    'BURGER ZEMICKE': 'Burger zemicke',
  },
};

function parseAssortmentFile(filePath: string): Product[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(line => line.trim());
  
  const products: Product[] = [];
  let currentCategory: string | null = null;
  let currentCategoryId: string | null = null;
  let currentSubcategory: string | null = null;
  
  // Product line pattern: starts with SKU (digits and spaces), followed by product name, ends with unit
  const productLinePattern = /^(\d[\d\s]*\d|\d)\s+(.+?)\s+(KOM|KG|Tr\.pak)$/;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (!line || line === 'ASORTIMAN' || line === 'SIFRAARTIKAL Jed.m.' || line === 'ARTIKAL' || line === 'Jed.m.Tr.pak') {
      continue;
    }
    
    // Check if this is a category line (all caps, matches our mapping)
    const matchedCategory = Object.keys(categoryMapping).find(key => 
      line.toUpperCase().includes(key.toUpperCase()) || key.toUpperCase().includes(line.toUpperCase())
    );
    
    if (matchedCategory) {
      currentCategory = matchedCategory;
      currentCategoryId = categoryMapping[matchedCategory];
      currentSubcategory = null;
      continue;
    }
    
    // Check if this is a subcategory line (not a product line, but not empty)
    const productMatch = line.match(productLinePattern);
    
    if (!productMatch && currentCategoryId && line.length > 3) {
      // This might be a subcategory
      currentSubcategory = line;
      continue;
    }
    
    // Parse product line
    if (productMatch && currentCategoryId) {
      const [, skuRaw, nameRaw, unit] = productMatch;
      const sku = skuRaw.trim();
      const name = nameRaw.trim();
      
      // Generate ID from SKU (remove spaces)
      const id = sku.replace(/\s+/g, '');
      
      // Map subcategory if exists
      let mappedSubcategory: string | undefined = undefined;
      if (currentSubcategory && subcategoryMapping[currentCategoryId]) {
        mappedSubcategory = subcategoryMapping[currentCategoryId][currentSubcategory] || currentSubcategory;
      }
      
      products.push({
        id,
        name,
        unit,
        category: currentCategoryId,
        subcategory: mappedSubcategory,
        sku,
      });
    }
  }
  
  return products;
}

function groupProductsByCategory(products: Product[]): Record<string, Product[]> {
  const grouped: Record<string, Product[]> = {};
  
  for (const product of products) {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  }
  
  return grouped;
}

function generateTypeScriptFile(categoryId: string, products: Product[]): string {
  const varName = categoryId.replace(/-/g, '') + 'Proizvodi';
  
  let content = `import type { Product } from './product-categories'\n\n`;
  content += `export const ${varName}: Product[] = [\n`;
  
  products.forEach((product, index) => {
    content += `  {\n`;
    content += `    id: '${product.id}',\n`;
    content += `    name: '${product.name.replace(/'/g, "\\'")}',\n`;
    if (product.description) {
      content += `    description: '${product.description.replace(/'/g, "\\'")}',\n`;
    }
    content += `    unit: '${product.unit}',\n`;
    content += `    category: '${product.category}',\n`;
    if (product.subcategory) {
      content += `    subcategory: '${product.subcategory.replace(/'/g, "\\'")}',\n`;
    }
    if (product.sku) {
      content += `    sku: '${product.sku}'\n`;
    }
    content += `  }${index < products.length - 1 ? ',' : ''}\n`;
  });
  
  content += `]\n`;
  
  return content;
}

// Main execution
const downloadsPath = 'C:\\Users\\PC\\Downloads';
const primaPath = path.join(downloadsPath, 'prima_asortiman.txt');
const hlebPath = path.join(downloadsPath, 'hleb_peciva_asortiman.txt');

console.log('Parsing assortment files...');

const primaProducts = parseAssortmentFile(primaPath);
const hlebProducts = parseAssortmentFile(hlebPath);

const allProducts = [...primaProducts, ...hlebProducts];

console.log(`Parsed ${allProducts.length} total products`);
console.log(`  - ${primaProducts.length} from prima_asortiman.txt`);
console.log(`  - ${hlebProducts.length} from hleb_peciva_asortiman.txt`);

const groupedProducts = groupProductsByCategory(allProducts);

console.log('\nProducts by category:');
Object.entries(groupedProducts).forEach(([categoryId, products]) => {
  console.log(`  ${categoryId}: ${products.length} products`);
});

// Generate TypeScript files
const dataDir = path.join(process.cwd(), 'src', 'data');

Object.entries(groupedProducts).forEach(([categoryId, products]) => {
  const fileName = `${categoryId}.ts`;
  const filePath = path.join(dataDir, fileName);
  const content = generateTypeScriptFile(categoryId, products);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Generated ${fileName}`);
});

console.log('\n✅ Product data files updated successfully!');

