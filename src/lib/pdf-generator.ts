'use client'

import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { allProducts, productCategories } from '@/data/products'
import type { Product } from '@/data/products'

type CategoryGroup = {
  id: string
  title: string
  products: Product[]
}

const buildCategoryGroups = (): CategoryGroup[] => {
  const groupMap = new Map<string, CategoryGroup>()

  productCategories.forEach((category) => {
    groupMap.set(category.id, {
      id: category.id,
      title: category.name,
      products: [],
    })
  })

  allProducts.forEach((product) => {
    const existingGroup = groupMap.get(product.category)

    if (existingGroup) {
      existingGroup.products.push(product)
      return
    }

    groupMap.set(product.category, {
      id: product.category,
      title: product.category.toUpperCase(),
      products: [product],
    })
  })

  return Array.from(groupMap.values()).filter((group) => group.products.length > 0)
}

// Helper function to handle Serbian Latin characters for PDF
const sanitizeText = (text: string): string => {
  // jsPDF's default fonts don't support Serbian Latin extended characters
  // Map them to their closest ASCII equivalents for proper PDF display
  const charMap: Record<string, string> = {
    'č': 'c', 'Č': 'C',
    'ć': 'c', 'Ć': 'C',
    'š': 's', 'Š': 'S',
    'ž': 'z', 'Ž': 'Z',
    'đ': 'd', 'Đ': 'D',
  }
  
  return text.replace(/[čćšžđČĆŠŽĐ]/g, (char) => charMap[char] || char)
}

const formatProductRow = (product: Product) => [
  sanitizeText(product.name),
  sanitizeText(product.unit),
  product.sku ?? '—',
  product.subcategory ? sanitizeText(product.subcategory) : '',
]

let isGenerating = false
let lastGenerationTime = 0

export const generateProductCatalogPdf = () => {
  const now = Date.now()
  
  // Prevent multiple calls within 2 seconds
  if (isGenerating || (now - lastGenerationTime < 2000)) {
    console.warn('⚠️ PDF generation BLOCKED - too soon since last call')
    return
  }
  
  console.log('🚀 Generišem PDF katalog sa', allProducts.length, 'proizvoda...')
  
  isGenerating = true
  lastGenerationTime = now
  
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
      compress: true,
    })
    
    // Set font to helvetica which has better Latin character support
    doc.setFont('helvetica', 'normal')

    doc.setProperties({
    title: 'Prima Venta Katalog 2025',
    subject: 'Kompletan asortiman Prima Venta proizvoda',
    author: 'Prima Venta',
  })

  // Header with branding
  doc.setFillColor(100, 123, 143)
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), 80, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.text('Prima Venta - Katalog 2025', 40, 50)

  doc.setFontSize(12)
  doc.text('Specijalizovana nabavka za HoReCa sektor', 40, 70)

  // Product count with categories
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(11)
  const categoryCount = productCategories.length
  doc.text(sanitizeText(`Ukupno proizvoda: ${allProducts.length} | Kategorija: ${categoryCount}`), 40, 110)
  
  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text('info@primaventa.rs', 40, 125)

  let cursorY = 145
  const usablePageHeight = doc.internal.pageSize.getHeight() - 100

  buildCategoryGroups().forEach((group, index) => {
    if (cursorY > usablePageHeight) {
      doc.addPage()
      cursorY = 60
    }

      doc.setFontSize(14)
      doc.setTextColor(100, 123, 143)
      doc.text(`${index + 1}. ${sanitizeText(group.title)}`, 40, cursorY)

    autoTable(doc, {
      startY: cursorY + 10,
      head: [[sanitizeText('Naziv'), sanitizeText('Jedinica'), 'SKU', sanitizeText('Napomena')]],
      body: group.products.map(formatProductRow),
      styles: {
        fontSize: 9,
        lineColor: [230, 230, 230],
        lineWidth: 0.5,
        halign: 'left',
      },
      headStyles: {
        fillColor: [100, 123, 143],
        textColor: 255,
        fontStyle: 'bold',
      },
      theme: 'grid',
      margin: { left: 40, right: 40 },
      columnStyles: {
        0: { cellWidth: 220 },
        1: { cellWidth: 70 },
        2: { cellWidth: 100 },
        3: { cellWidth: 'auto' },
      },
             didDrawPage: (data) => {
               // Add footer with page numbers
               const pageCount = doc.getNumberOfPages()
               const currentPage = (doc as any).internal.getCurrentPageInfo().pageNumber
               
               doc.setFontSize(9)
               doc.setTextColor(150, 150, 150)
               doc.text(
                 sanitizeText(`Strana ${currentPage} od ${pageCount}`),
                 doc.internal.pageSize.getWidth() / 2,
                 doc.internal.pageSize.getHeight() - 30,
                 { align: 'center' }
               )
               
               doc.text(
                 'Prima Venta | info@primaventa.rs',
                 40,
                 doc.internal.pageSize.getHeight() - 30
               )
             },
    })

    const lastTable = (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable
    cursorY = (lastTable?.finalY ?? cursorY) + 25
  })

  // Add page numbers to all pages (update after all content is added)
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(9)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `Strana ${i} od ${totalPages}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 30,
      { align: 'center' }
    )
    
    doc.text(
      'Prima Venta | info@primaventa.rs',
      40,
      doc.internal.pageSize.getHeight() - 30
    )
  }

    // Use jsPDF's built-in save (most compatible method)
    doc.save('Prima-Venta-Katalog-2025.pdf')
    console.log('✅ PDF preuzimanje pokrenuto')
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
  } finally {
    // Reset flag after a short delay to allow the download to initiate
    setTimeout(() => {
      isGenerating = false
    }, 1000)
  }
}

