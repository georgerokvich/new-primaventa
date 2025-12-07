import * as fs from 'fs';
import * as path from 'path';

interface Product {
  id: string;
  name: string;
  unit: string;
  category: string;
  subcategory?: string;
  sku?: string;
}

// Category mapping from PDF headings to category IDs
const categoryMapping: Record<string, string> = {
  'MLECNI PROIZVODI': 'mlecni-proizvodi',
  'MESO,  MESNATI I SUHOMESNATI PROIZVODI': 'mesnati-suhomesnati',
  'SUVI DELIKATES PROIZVODI': 'suvi-delikates',
  'ZAMRZNUTI PROIZVODI OD KROMPIRA': 'zaledjeni-krompir',
  'JUNECI BURGERI': 'juneci-burgeri',
  'TESTENINE': 'testenine',
  'OSTALE NAMIRNICE': 'ostale-namirnice',
  'MOGUNTIA FOOD GROUP  Flavoursome solutions sinse 1903': 'moguntia-food-group',
  'PROIZVODI OD BRASNA': 'proizvodi-brasna',
  'ULjA': 'ulja',
  'ČOKOLADA I PROIZVODI OD ČOKOLADE': 'cokolada',
  'KONZERVIRANI PROIZVODI': 'konzervirani-proizvodi',
  'SOSEV': 'sosevi',
  'POSLASTICARSTVO  I SLATKI PROGRAM': 'slatki-program',
  'OSTALO': 'ostalo',
  'HLEB I PECIVA': 'hleb-peciva'
};

// Export variable names for each category
const exportVariableNames: Record<string, string> = {
  'mlecni-proizvodi': 'mlecniProizvodi',
  'mesnati-suhomesnati': 'mesnatiSuhomesnatiProizvodi',
  'suvi-delikates': 'suviDelikatesProizvodi',
  'zaledjeni-krompir': 'zaledjeniKrompirProizvodi',
  'juneci-burgeri': 'juneciBurgeriProizvodi',
  'testenine': 'testenineProizvodi',
  'ostale-namirnice': 'ostaleNamirniceProizvodi',
  'moguntia-food-group': 'moguntiaFoodGroupProizvodi',
  'proizvodi-brasna': 'proizvodiBrasnaProizvodi',
  'pirinac': 'pirinacProizvodi',
  'ulja': 'uljaProizvodi',
  'sirce-kreme': 'sirceKremeProizvodi',
  'cokolada': 'cokoladaProizvodi',
  'konzervirani-proizvodi': 'konzerviraniProizvodiProizvodi',
  'sosevi': 'soseviProizvodi',
  'slatki-program': 'slatkiProgramProizvodi',
  'ostalo': 'ostaloProizvodi',
  'hleb-peciva': 'hlebPecivaProizvodi'
};

function parsePrimaAssortment(filePath: string): Product[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const products: Product[] = [];
  let currentCategory = '';
  let currentSubcategory = '';
  let productIdCounter = 1;
  const usedIds = new Set<string>();
  
  // Special subcategories that should be promoted to top-level categories
  const promoteToCategory: Record<string, string> = {
    'Pirinač': 'pirinac',
    'Sirće, kreme': 'sirce-kreme'
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip the header lines
    if (line.includes('ASORTIMAN') || line.includes('SIFRAARTIKAL') || line === 'Jed.m.' || line.includes('Tr.pak') || line.includes('ARTIKAL')) {
      continue;
    }
    
    // Check if this is a main category
    const categoryMatch = Object.keys(categoryMapping).find(key => line.includes(key));
    if (categoryMatch) {
      currentCategory = categoryMapping[categoryMatch];
      currentSubcategory = '';
      continue;
    }
    
    // Check if this subcategory should be promoted to a category
    if (promoteToCategory[line]) {
      currentCategory = promoteToCategory[line];
      currentSubcategory = '';
      continue;
    }
    
    // Check if this is a subcategory (mixed/title case or all caps, no SKU at start)
    if (!line.match(/^0{0,2}\s?\d{1,3}\s/) && currentCategory && !line.match(/^\d/)) {
      // It's likely a subcategory
      currentSubcategory = line;
      continue;
    }
    
    // Parse product line: SKU PRODUCT_NAME UNIT
    // More flexible pattern to catch units stuck to product names
    const productMatch = line.match(/^(0{0,2}\s?\d{1,3})\s+(.+?)(KOM|KG|L|GR)\s*$/i);
    if (productMatch && currentCategory) {
      const [, sku, nameRaw, unit] = productMatch;
      const cleanSku = sku.trim();
      
      // Clean up the name - remove trailing unit indicators
      let cleanName = nameRaw.trim()
        .replace(/\s+(KOM|KG|L|GR)\s*$/i, '')
        .replace(/(KOM|KG|L|GR)$/i, '')
        .trim();
      
      // Generate unique ID - try SKU first, then add suffix if duplicate
      let baseId = cleanSku.replace(/\s/g, '').replace(/^0+/, '') || cleanSku.replace(/\s/g, '');
      let id = baseId;
      let suffix = 1;
      
      // Ensure uniqueness by adding suffix if needed
      while (usedIds.has(id)) {
        id = `${baseId}-${suffix}`;
        suffix++;
      }
      usedIds.add(id);
      
      products.push({
        id,
        name: cleanName,
        unit: unit.toUpperCase(),
        category: currentCategory,
        subcategory: currentSubcategory || undefined,
        sku: cleanSku
      });
    }
  }
  
  return products;
}

function parseHlebPecivaAssortment(filePath: string): Product[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const products: Product[] = [];
  const category = 'hleb-peciva';
  let currentSubcategory = '';
  let productIdCounter = 1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip header lines
    if (line.includes('HLEB I PECIVA') || line.includes('ARTIKAL') || line.includes('Jed.m.Tr.pak')) {
      continue;
    }
    
    // Check if it's a subcategory heading (all caps, short, no numbers at end)
    if (line === line.toUpperCase() && line.length < 50 && !line.match(/\d+\s*(KOM|KG|PP|GR)\s*\d*$/)) {
      currentSubcategory = line;
      continue;
    }
    
    // Parse product line: PRODUCT_NAME WEIGHT UNIT PACKAGE_COUNT
    // e.g., "KAJZERICA SA SUSAMOM 60g KOM 95"
    const productMatch = line.match(/^(.+?)\s+(\d+)\s*g?\s*(KOM|KG|PP|GR)\s+(\d+)\s*$/i);
    if (productMatch) {
      const [, name, , unit] = productMatch;
      const cleanName = name.trim();
      const id = `hleb-${productIdCounter.toString().padStart(3, '0')}`;
      productIdCounter++;
      
      products.push({
        id,
        name: cleanName,
        unit: unit.toUpperCase(),
        category,
        subcategory: currentSubcategory || undefined,
        sku: undefined
      });
    }
  }
  
  return products;
}

function groupByCategory(products: Product[]): Record<string, Product[]> {
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
  const exportName = exportVariableNames[categoryId] || `${categoryId}Proizvodi`;
  
  let content = `import type { Product } from './product-categories'\n\n`;
  content += `export const ${exportName}: Product[] = [\n`;
  
  for (const product of products) {
    content += `  {\n`;
    content += `    id: '${product.id}',\n`;
    content += `    name: '${product.name.replace(/'/g, "\\'")}',\n`;
    content += `    unit: '${product.unit}',\n`;
    content += `    category: '${product.category}'`;
    if (product.subcategory) {
      content += `,\n    subcategory: '${product.subcategory.replace(/'/g, "\\'")}'`;
    }
    if (product.sku) {
      content += `,\n    sku: '${product.sku}'`;
    }
    content += `\n  },\n`;
  }
  
  content += `]\n`;
  
  return content;
}

function main() {
  console.log('🚀 Starting assortment parsing...\n');
  
  // Parse both assortment files
  const primaPath = 'C:\\Users\\PC\\Downloads\\prima_asortiman.txt';
  const hlebPath = 'C:\\Users\\PC\\Downloads\\hleb_peciva_asortiman.txt';
  
  console.log('📄 Parsing prima_asortiman.txt...');
  const primaProducts = parsePrimaAssortment(primaPath);
  console.log(`   Found ${primaProducts.length} products\n`);
  
  console.log('📄 Parsing hleb_peciva_asortiman.txt...');
  const hlebProducts = parseHlebPecivaAssortment(hlebPath);
  console.log(`   Found ${hlebProducts.length} products\n`);
  
  // Combine all products
  const allProducts = [...primaProducts, ...hlebProducts];
  console.log(`📦 Total products: ${allProducts.length}\n`);
  
  // Group by category
  const grouped = groupByCategory(allProducts);
  
  console.log('📂 Products by category:');
  for (const [categoryId, products] of Object.entries(grouped)) {
    console.log(`   ${categoryId}: ${products.length} products`);
  }
  console.log('');
  
  // Generate TypeScript files
  const dataDir = path.join(process.cwd(), 'src', 'data');
  
  // Clear existing product files (keep product-categories.ts and products.ts)
  const existingFiles = fs.readdirSync(dataDir);
  for (const file of existingFiles) {
    if (file.endsWith('.ts') && file !== 'product-categories.ts' && file !== 'products.ts' && file !== 'sample-products.ts') {
      fs.unlinkSync(path.join(dataDir, file));
      console.log(`🗑️  Removed old file: ${file}`);
    }
  }
  console.log('');
  
  // Write new files
  console.log('✍️  Writing new category files:');
  for (const [categoryId, products] of Object.entries(grouped)) {
    const fileName = `${categoryId}.ts`;
    const filePath = path.join(dataDir, fileName);
    const content = generateTypeScriptFile(categoryId, products);
    fs.writeFileSync(filePath, content);
    console.log(`   ✅ ${fileName} (${products.length} products)`);
  }
  
  console.log('\n✨ Done! Product data has been regenerated.');
}

main();

