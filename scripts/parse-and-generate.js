const fs = require('fs');
const path = require('path');

// Category mapping from PDF section headings to category IDs
const categoryMapping = {
  'MLECNI PROIZVODI': 'mlecni-proizvodi',
  'MESO,  MESNATI I SUHOMESNATI PROIZVODI': 'mesnati-suhomesnati',
  'SUVI DELIKATES PROIZVODI': 'suvi-delikates',
  'JUNECI BURGERI': 'juneci-burgeri',
  'ZAMRZNUTI PROIZVODI OD KROMPIRA': 'zaledjeni-krompir',
  'TESTENINE': 'testenine',
  'OSTALE NAMIRNICE': 'ostale-namirnice',
  'MOGUNTIA FOOD GROUP': 'moguntia-food-group',
  'PROIZVODI OD BRASNA': 'proizvodi-brasna',
  'PIRINAC': 'pirinac',
  'PIRINAČ': 'pirinac',
  'ULJA': 'ulja',
  'SIRCE, KREME': 'sirce-kreme',
  'KONZERVIRANI PROIZVODI': 'konzervirani-proizvodi',
  'SOSEV': 'sosevi',
  'POSLASTICARSTVO  I SLATKI PROGRAM': 'slatki-program',
  'OSTALO': 'ostalo',
  'HLEB I PECIVA': 'proizvodi-brasna',
};

// Subcategory mapping
const subcategoryMapping = {
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
    ' PANČETA  narezana': 'PANČETA narezana',
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
    '    Kremovi': 'Kremovi',
    'SIPRAL  krem i paste': 'SIPRAL kremi paste',
    'PMF krem I paste': 'PMF krem i paste',
    'Keks': 'Keks i kadaif',
    '    Keks': 'Keks i kadaif',
    'Prelivi  sa vecom gustinom  PMF': 'Prelivi sa većom gustinom PMF',
    '    Prelivi  sa vecom gustinom  PMF': 'Prelivi sa većom gustinom PMF',
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

// File name mapping for category IDs
const fileNameMapping = {
  'mlecni-proizvodi': 'mlecni-proizvodi',
  'mesnati-suhomesnati': 'mesnati-suhomesnati',
  'suvi-delikates': 'suvi-delikates',
  'juneci-burgeri': 'ostali-proizvodi', // juneci burgeri goes into ostali-proizvodi
  'zaledjeni-krompir': 'ostali-proizvodi', // zaledjeni krompir goes into ostali-proizvodi
  'testenine': 'testenine',
  'ostale-namirnice': 'ostale-namirnice',
  'moguntia-food-group': 'moguntia-food-group',
  'proizvodi-brasna': 'proizvodi-brasna',
  'pirinac': 'pirinac',
  'ulja': 'ulja',
  'sirce-kreme': 'sirce-kreme',
  'konzervirani-proizvodi': 'konzervirani-proizvodi',
  'sosevi': 'sosevi',
  'slatki-program': 'slatki-program',
  'ostalo': 'ostalo',
  'sveze-meso': 'ostali-proizvodi', // sveze meso goes into ostali-proizvodi
};

function parseAssortmentFile(filePath, isHlebPeciva = false) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(line => line.trim());
  
  const products = [];
  let currentCategory = null;
  let currentCategoryId = null;
  let currentSubcategory = null;
  let skuCounter = 1; // For hleb_peciva products without SKUs
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines and header lines
    if (!line || line === 'ASORTIMAN' || line === 'SIFRAARTIKAL Jed.m.' || 
        line === 'ARTIKAL' || line === 'Jed.m.Tr.pak' || 
        line.includes('Dimljeni proizvodi u slajsu mogu biti I u komadu')) {
      continue;
    }
    
    // Check if this is a category line
    const matchedCategory = Object.keys(categoryMapping).find(key => {
      // Normalize both strings: uppercase, trim, remove special chars
      const normalizeStr = (str) => str.toUpperCase().trim()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove accents
      
      const normalizedKey = normalizeStr(key);
      const normalizedLine = normalizeStr(line);
      
      // Check for exact match or contains
      if (normalizedLine === normalizedKey || 
          normalizedLine.includes(normalizedKey) || 
          normalizedKey.includes(normalizedLine)) {
        return true;
      }
      
      // Special cases
      if (normalizedLine.startsWith('MOGUNTIA') && key.includes('MOGUNTIA')) return true;
      if (normalizedLine.includes('SIRCE') && normalizedKey.includes('SIRCE')) return true;
      if (normalizedLine.includes('ULJA') && normalizedKey.includes('ULJA')) return true;
      
      return false;
    });
    
    if (matchedCategory) {
      currentCategory = matchedCategory;
      currentCategoryId = categoryMapping[matchedCategory];
      currentSubcategory = null;
      continue;
    }
    
    // Try to parse as product line
    // Format 1: SKU PRODUCT_NAME UNIT (prima_asortiman)
    // Format 2: PRODUCT_NAME size UNIT count (hleb_peciva)
    
    let productMatch;
    let sku, name, unit;
    
    if (isHlebPeciva) {
      // Hleb peciva format: product name with size, then unit, then optional count
      // Example: KAJZERICA SA SUSAMOM 60g KOM 95
      const match = line.match(/^(.+?)\s+(\d+g|\d+\s*g)\s+(KOM|KG|PP|Tr\.pak)(?:\s+\d+)?$/i);
      if (match && currentCategoryId) {
        name = match[1].trim() + ' ' + match[2].trim();
        unit = match[3];
        sku = `HLEB${String(skuCounter++).padStart(3, '0')}`;
        productMatch = true;
      }
    } else {
      // Prima asortiman format: SKU PRODUCT_NAME UNIT
      // Handle cases where unit might be concatenated (e.g., "1000 GRKOM" = "1000 GR" + "KOM")
      const match = line.match(/^(\d[\d\s]*\d|\d)\s+(.+?)(KOM|KG)$/i);
      if (match && currentCategoryId) {
        sku = match[1].trim();
        name = match[2].trim();
        unit = match[3].toUpperCase();
        productMatch = true;
      }
    }
    
    if (productMatch) {
      // Generate ID from SKU (remove spaces)
      const id = sku.replace(/\s+/g, '');
      
      // Map subcategory if exists
      let mappedSubcategory = undefined;
      if (currentSubcategory && subcategoryMapping[currentCategoryId]) {
        mappedSubcategory = subcategoryMapping[currentCategoryId][currentSubcategory] || 
                           subcategoryMapping[currentCategoryId][currentSubcategory.trim()] ||
                           currentSubcategory.trim();
      }
      
      products.push({
        id,
        name,
        unit,
        category: currentCategoryId,
        subcategory: mappedSubcategory,
        sku,
      });
    } else if (currentCategoryId && line.length > 3 && !line.match(/^\d/)) {
      // This might be a subcategory
      currentSubcategory = line;
    }
  }
  
  return products;
}

function groupProductsByCategory(products) {
  const grouped = {};
  
  for (const product of products) {
    const categoryId = product.category;
    if (!grouped[categoryId]) {
      grouped[categoryId] = [];
    }
    grouped[categoryId].push(product);
  }
  
  return grouped;
}

function groupProductsByFile(groupedByCategory) {
  const grouped = {};
  
  for (const [categoryId, products] of Object.entries(groupedByCategory)) {
    const fileName = fileNameMapping[categoryId] || categoryId;
    if (!grouped[fileName]) {
      grouped[fileName] = [];
    }
    grouped[fileName].push(...products);
  }
  
  return grouped;
}

function generateTypeScriptFile(fileName, products) {
  // Determine variable names based on filename
  let varNames = [];
  
  if (fileName === 'ostali-proizvodi') {
    // Group by actual category for ostali-proizvodi
    const svezeMeso = products.filter(p => p.category === 'mesnati-suhomesnati' && p.subcategory === 'Sveze meso');
    const zaledjeniKrompir = products.filter(p => p.category === 'zaledjeni-krompir');
    const juneciBurgeri = products.filter(p => p.category === 'juneci-burgeri');
    
    varNames = [
      { name: 'svezeMesoProizvodi', products: svezeMeso },
      { name: 'zaledjeniKrompirProizvodi', products: zaledjeniKrompir },
      { name: 'juneciBurgeriProizvodi', products: juneciBurgeri },
    ];
  } else {
    const varName = fileName.replace(/-/g, '') + 'Proizvodi';
    varNames = [{ name: varName, products }];
  }
  
  let content = `import type { Product } from './product-categories'\n\n`;
  
  for (let i = 0; i < varNames.length; i++) {
    const { name: varName, products: varProducts } = varNames[i];
    
    content += `export const ${varName}: Product[] = [\n`;
    
    varProducts.forEach((product, index) => {
      content += `  {\n`;
      content += `    id: '${product.id}',\n`;
      content += `    name: '${product.name.replace(/'/g, "\\'")}',\n`;
      content += `    unit: '${product.unit}',\n`;
      content += `    category: '${product.category}',\n`;
      if (product.subcategory) {
        content += `    subcategory: '${product.subcategory.replace(/'/g, "\\'")}',\n`;
      }
      if (product.sku) {
        content += `    sku: '${product.sku}'\n`;
      }
      content += `  }${index < varProducts.length - 1 ? ',' : ''}\n`;
    });
    
    content += `]\n`;
    
    if (i < varNames.length - 1) {
      content += `\n`;
    }
  }
  
  return content;
}

// Main execution
console.log('🚀 Starting product data generation...\n');

const downloadsPath = 'C:\\Users\\PC\\Downloads';
const primaPath = path.join(downloadsPath, 'prima_asortiman.txt');
const hlebPath = path.join(downloadsPath, 'hleb_peciva_asortiman.txt');

console.log('📖 Parsing assortment files...');
const primaProducts = parseAssortmentFile(primaPath, false);
const hlebProducts = parseAssortmentFile(hlebPath, true);

const allProducts = [...primaProducts, ...hlebProducts];

console.log(`\n✅ Parsed ${allProducts.length} total products`);
console.log(`   - ${primaProducts.length} from prima_asortiman.txt`);
console.log(`   - ${hlebProducts.length} from hleb_peciva_asortiman.txt\n`);

const groupedByCategory = groupProductsByCategory(allProducts);
console.log('📊 Products by category:');
Object.entries(groupedByCategory).forEach(([categoryId, products]) => {
  console.log(`   ${categoryId}: ${products.length} products`);
});

const groupedByFile = groupProductsByFile(groupedByCategory);
console.log('\n📁 Products by file:');
Object.entries(groupedByFile).forEach(([fileName, products]) => {
  console.log(`   ${fileName}.ts: ${products.length} products`);
});

// Generate TypeScript files
console.log('\n✍️  Generating TypeScript files...');
const dataDir = path.join(__dirname, '..', 'src', 'data');

Object.entries(groupedByFile).forEach(([fileName, products]) => {
  const filePath = path.join(dataDir, `${fileName}.ts`);
  const content = generateTypeScriptFile(fileName, products);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`   ✓ Generated ${fileName}.ts`);
});

console.log('\n🎉 Product data files updated successfully!');
console.log(`\n📝 Summary:`);
console.log(`   Total products: ${allProducts.length}`);
console.log(`   Files generated: ${Object.keys(groupedByFile).length}`);

