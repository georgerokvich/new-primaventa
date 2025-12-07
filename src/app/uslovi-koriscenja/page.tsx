import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function UsloviKoriscenja() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fcfcfc] to-white">
      {/* Header */}
      <div className="bg-midnight-slate text-white py-8">
        <div className="container mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-champagne-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Nazad na početnu</span>
          </Link>
          <h1 className="text-4xl font-sans font-bold mt-4">Uslovi Korišćenja</h1>
          <p className="text-white/70 mt-2">Poslednje ažurirano: {new Date().toLocaleDateString('sr-RS')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
          
          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">1. Opšte Odredbe</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Dobrodošli na veb sajt Prima Venta. Korišćenjem našeg sajta i usluga, prihvatate sledeće uslove korišćenja. 
              Molimo vas da pažljivo pročitate ove odredbe pre nego što nastavite sa korišćenjem naših usluga.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">2. Usluge</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Prima Venta pruža usluge snabdevanja HoReCa sektora kvalitetnim prehrambenim proizvodima. Naše usluge uključuju:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4">
              <li>Distribuciju prehrambenih proizvoda za hotele, restorane i kafiće</li>
              <li>Personalizovanu ponudu i konsultacije</li>
              <li>Planiranje i izradu menija</li>
              <li>Logističku podršku i pravovremenu dostavu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">3. Korišćenje Sajta</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Korisnici se obavezuju da neće koristiti sajt na način koji bi mogao oštetiti, onemogućiti ili narušiti 
              funkcionalnost sajta. Zabranjeno je korišćenje sajta u nezakonite svrhe ili na način koji krši prava 
              trećih lica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">4. Intelektualna Svojina</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Sav sadržaj na ovom sajtu, uključujući tekstove, slike, logotipe i dizajn, je vlasništvo Prima Venta 
              ili licenciran od strane trećih lica. Zabranjeno je kopiranje, reprodukcija ili distribucija sadržaja 
              bez prethodne pismene dozvole.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">5. Narudžbine i Plaćanje</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Sve narudžbine su predmet dostupnosti proizvoda. Prima Venta zadržava pravo da odbije ili otkaže 
              narudžbinu u slučaju nedostupnosti proizvoda ili grešaka u ceni. Plaćanje se vrši u skladu sa 
              dogovorenim uslovima između Prima Venta i klijenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">6. Dostava</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Rokovi dostave zavise od lokacije i dostupnosti proizvoda. Prima Venta će uložiti sve napore da 
              isporuči proizvode u dogovorenom roku, ali ne preuzima odgovornost za kašnjenja uzrokovana vanrednim 
              okolnostima ili višom silom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">7. Reklamacije</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Klijenti imaju pravo da podnese reklamaciju u roku od 24 sata od prijema proizvoda ukoliko su 
              proizvodi oštećeni ili ne odgovaraju narudžbini. Reklamacije se podnose putem email-a ili telefona.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">8. Ograničenje Odgovornosti</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Prima Venta ne snosi odgovornost za eventualnu štetu koja može nastati korišćenjem naših proizvoda 
              ili usluga, osim u slučajevima propisanim zakonom. Naša odgovornost je ograničena na vrednost 
              isporučenih proizvoda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">9. Izmene Uslova</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Prima Venta zadržava pravo da izmeni ove uslove korišćenja u bilo kom trenutku. Izmene stupaju na 
              snagu objavljivanjem na sajtu. Preporučujemo redovno pregled ove stranice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">10. Kontakt</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Za sva pitanja vezana za uslove korišćenja, možete nas kontaktirati na:
            </p>
            <div className="mt-4 p-4 bg-champagne-gold/10 rounded-lg">
              <p className="text-charcoal/80"><strong>Email:</strong> primaventa.nis@gmail.com</p>
              <p className="text-charcoal/80"><strong>Telefon:</strong> 060 095 1061</p>
              <p className="text-charcoal/80"><strong>Adresa:</strong> Jadranska 30, 18000 Niš (Crveni Krst), Srbija</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
