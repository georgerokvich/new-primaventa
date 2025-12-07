import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Privatnost() {
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
          <h1 className="text-4xl font-sans font-bold mt-4">Politika Privatnosti</h1>
          <p className="text-white/70 mt-2">Poslednje ažurirano: {new Date().toLocaleDateString('sr-RS')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
          
          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">1. Uvod</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Prima Venta poštuje vašu privatnost i posvećena je zaštiti vaših ličnih podataka. Ova politika 
              privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i delimo vaše lične podatke kada 
              koristite naš veb sajt i usluge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">2. Podaci Koje Prikupljamo</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Prikupljamo samo podatke koje nam direktno dostavljate kroz kontakt formu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4">
              <li><strong>Kontakt informacije:</strong> ime, prezime, email adresa, broj telefona</li>
              <li><strong>Poslovni podaci:</strong> naziv firme, tip objekta (hotel, restoran, kafić)</li>
              <li><strong>Vaša poruka:</strong> sadržaj upita koji nam šaljete</li>
            </ul>
            <p className="text-charcoal/80 leading-relaxed mt-4">
              <strong>Ne prikupljamo:</strong> IP adrese, podatke o browseru, lokaciju, niti koristimo kolačiće za praćenje.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">3. Kako Koristimo Vaše Podatke</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Vaše lične podatke koristimo isključivo u sledeće svrhe:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4">
              <li>Odgovaranje na vaše upite i kontaktiranje sa vama</li>
              <li>Pružanje informacija o našim proizvodima i uslugama</li>
              <li>Kreiranje personalizovane ponude za vaš objekat</li>
              <li>Komunikacija vezana za poslovnu saradnju</li>
            </ul>
            <p className="text-charcoal/80 leading-relaxed mt-4">
              Vaše podatke <strong>ne koristimo</strong> za marketing bez vaše saglasnosti, niti ih delimo sa trećim licima u marketinške svrhe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">4. Pravni Osnov za Obradu</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Vaše lične podatke obrađujemo na osnovu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4 mt-4">
              <li>Ugovorne obaveze - kada je obrada neophodna za izvršenje ugovora</li>
              <li>Zakonske obaveze - kada je obrada potrebna radi ispunjenja zakonskih zahteva</li>
              <li>Legitimnog interesa - za unapređenje usluga i poslovanja</li>
              <li>Pristanka - kada ste nam dali izričitu saglasnost za određenu obradu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">5. Deljenje Podataka</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Vaše lične podatke <strong>ne prodajemo niti delimo</strong> sa trećim licima u marketinške svrhe.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Podatke možemo deliti samo sa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4 mt-4">
              <li><strong>Pružaocima email usluga:</strong> za slanje i primanje email komunikacije</li>
              <li><strong>Državnim organima:</strong> samo kada je to zakonski obavezno</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">6. Čuvanje Podataka</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Vaše lične podatke čuvamo onoliko dugo koliko je potrebno za ispunjenje svrha za koje su prikupljeni, 
              ili dok to zahteva zakon. Nakon toga, podaci se bezbedno brišu ili anonimizuju.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">7. Zaštita Podataka</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Koristimo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog 
              pristupa, gubitka ili zloupotrebe. Ovo uključuje enkripciju, bezbedne servere i redovne bezbednosne 
              procene.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">8. Vaša Prava</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              U skladu sa zakonom, imate sledeća prava:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 ml-4">
              <li><strong>Pravo na pristup:</strong> možete zatražiti kopiju svojih ličnih podataka</li>
              <li><strong>Pravo na ispravku:</strong> možete zatražiti ispravku netačnih podataka</li>
              <li><strong>Pravo na brisanje:</strong> možete zatražiti brisanje svojih podataka</li>
              <li><strong>Pravo na ograničenje obrade:</strong> možete ograničiti kako koristimo vaše podatke</li>
              <li><strong>Pravo na prenosivost:</strong> možete zatražiti prenos podataka drugom pružaocu usluga</li>
              <li><strong>Pravo na prigovor:</strong> možete se usprotiviti obradi u određenim slučajevima</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">9. Kolačići (Cookies)</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Trenutno naš sajt ne koristi kolačiće niti bilo kakve tehnologije za praćenje. Sve informacije koje 
              prikupljamo dobijamo direktno od vas kroz kontakt forme ili poslovnu komunikaciju.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">10. Izmene Politike</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Zadržavamo pravo da ažuriramo ovu politiku privatnosti. O svim važnim izmenama ćemo vas obavestiti 
              putem email-a ili obaveštenja na sajtu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-sans font-bold text-midnight-slate mb-4">11. Kontakt</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Za sva pitanja vezana za politiku privatnosti ili vaša prava, možete nas kontaktirati:
            </p>
            <div className="p-4 bg-champagne-gold/10 rounded-lg space-y-2">
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
