import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import AboutExperience from '@/components/sections/AboutExperience'
import GalleryTimeline from '@/components/sections/GalleryTimeline'
import ProductCatalog from '@/components/sections/ProductCatalog'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navigation />
      <Hero />
      <AboutExperience />
      <GalleryTimeline />
      <ProductCatalog />
      <Contact />
      <Footer />
    </main>
  )
}
