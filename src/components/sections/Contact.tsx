'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Search, Send, CheckCircle2, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  businessType: string
  message: string
  terms: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    message: '',
    terms: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 8
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Ime i prezime je obavezno'
    if (!formData.email.trim()) {
      newErrors.email = 'Email adresa je obavezna'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Unesite validnu email adresu'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon je obavezan'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Unesite validan broj telefona'
    }
    if (!formData.message.trim()) newErrors.message = 'Poruka je obavezna'
    if (!formData.terms) newErrors.terms = 'Morate prihvatiti uslove korišćenja'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // TODO: Connect to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          businessType: '',
          message: '',
          terms: false
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error('Greška pri slanju poruke')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Došlo je do greške. Molimo pokušajte ponovo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper for Floating Label Input
  const FloatingInput = ({
    id, label, type = 'text', required = false, className = ''
  }: { id: keyof FormData, label: string, type?: string, required?: boolean, className?: string }) => {
    const hasError = Boolean(errors[id])
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-sm font-semibold text-[#0b162a]" htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={String(formData[id])}
          onChange={handleChange}
          className={`w-full rounded-lg border ${hasError ? 'border-red-500' : 'border-slate-200'} bg-white px-4 py-3 font-body text-midnight-slate focus:outline-none focus:ring-2 focus:ring-[#0b162a]/15 focus:border-[#0b162a] transition`}
        />
        {errors[id] && (
          <p className="text-red-500 text-xs font-montserrat">{errors[id]}</p>
        )}
      </div>
    )
  }

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden py-24"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(201, 168, 100, 0.15) 0%, transparent 50%)' }} />

      <div className="relative container mx-auto px-6 pointer-events-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start pointer-events-auto">

          {/* Left Column: Glass Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.35)] rounded-3xl p-8 md:p-12 relative pointer-events-auto"
          >
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-midnight-slate mb-3">
                Započnimo uspešno partnerstvo
              </h2>
              <p className="text-slate-600 font-body leading-relaxed">
                Svaki vrhunski ugostiteljski objekat je jedinstven i zato verujemo u lični pristup. Naš tim je tu da vas pažljivo sasluša i predloži rešenja koja će zaista unaprediti vaše poslovanje. Pišite nam slobodno a mi ćemo vam odgovoriti u roku od 24 časa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative pointer-events-auto">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                <FloatingInput id="name" label="Ime i Prezime" required />
                <FloatingInput id="email" label="Email Adresa" type="email" required />
                <FloatingInput id="phone" label="Telefon" type="tel" required />
                <FloatingInput id="company" label="Naziv Firme" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b162a]">Tip Objekta</label>
                <div className="relative">
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-montserrat text-charcoal focus:outline-none focus:ring-2 focus:ring-[#0b162a]/15 focus:border-[#0b162a] appearance-none cursor-pointer"
                  >
                    <option value="">Izaberite tip objekta...</option>
                    <option value="hotel">Hotel</option>
                    <option value="restoran">Restoran</option>
                    <option value="kafic">Kafić</option>
                    <option value="brza-hrana">Brza Hrana</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b162a] pointer-events-none select-none">
                  Vaša Poruka <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onWheel={(e) => e.stopPropagation()}
                  rows={4}
                  className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-200'} bg-white px-4 py-3 font-body text-midnight-slate focus:outline-none focus:ring-2 focus:ring-[#0b162a]/15 focus:border-[#0b162a] transition resize-y min-h-[120px]`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-montserrat">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
                <div className="flex flex-col">
                  <label className="flex items-center gap-3 font-montserrat text-charcoal cursor-pointer group">
                    <div className={`w-5 h-5 border-2 rounded transition-colors flex items-center justify-center ${formData.terms ? 'border-champagne-gold bg-champagne-gold text-white' : 'border-charcoal/30 group-hover:border-champagne-gold'
                      }`}>
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {formData.terms && <CheckCircle2 size={14} />}
                    </div>
                    <span className="text-sm text-charcoal/80">
                      Prihvatam{' '}
                      <a 
                        href="/uslovi-koriscenja" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-champagne-gold hover:text-midnight-slate underline transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        uslove korišćenja
                      </a>
                      {' '}<span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-xs mt-1 font-montserrat ml-8">{errors.terms}</p>
                  )}
                </div>

                <div className="w-full md:w-auto flex md:justify-end">
                  {isSuccess ? (
                    <div className="bg-green-50 text-green-800 px-6 py-3 rounded-full flex items-center gap-2 font-montserrat animate-in fade-in zoom-in">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Poslato!</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-champagne-gold text-midnight-slate px-10 py-4 rounded-md font-sans font-bold uppercase tracking-wide hover:bg-midnight-slate hover:text-champagne-gold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-champagne-gold/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>SLANJE...</span>
                        </>
                      ) : (
                        <>
                          <span>POŠALJITE UPIT</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Minimalist Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center h-full space-y-10 lg:pl-10 relative z-5 pointer-events-auto"
          >
            <div>
              <div className="text-warm-gold text-sm font-body uppercase tracking-widest mb-3">
                Kontakt Informacije
              </div>
              <h3 className="text-3xl font-sans text-midnight-slate font-bold">
                Tu smo za vas
              </h3>
            </div>

            <div className="space-y-8">
              <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                <div className="bg-white p-3 rounded-full shadow-md text-champagne-gold group-hover:text-charcoal group-hover:scale-110 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-[#0b162a] mb-1">Adresa Kompanije</h4>
                  <p className="font-montserrat text-charcoal/60 text-sm leading-relaxed">
                    Jadranska 30<br />
                    18000 Niš (Crveni Krst), Srbija
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                <div className="bg-white p-3 rounded-full shadow-md text-champagne-gold group-hover:text-charcoal group-hover:scale-110 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-[#0b162a] mb-1">Pozovite Nas</h4>
                  <p className="font-montserrat text-charcoal/60 text-sm">
                    Ponedeljak - Petak, 08:00 - 17:00
                  </p>
                  <a href="tel:+381600951061" className="font-montserrat text-[#0b162a] font-bold text-lg hover:text-champagne-gold transition-colors mt-1 block">
                    060 095 1061
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                <div className="bg-white p-3 rounded-full shadow-md text-champagne-gold group-hover:text-charcoal group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-[#0b162a] mb-1">Pišite Nam</h4>
                  <p className="font-montserrat text-charcoal/60 text-sm">
                    Odgovaramo u roku od 24h
                  </p>
                  <a href="mailto:primaventa.nis@gmail.com" className="font-montserrat text-[#0b162a] font-bold text-lg hover:text-champagne-gold transition-colors mt-1 block">
                    primaventa.nis@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="font-playfair italic text-[#475569] text-center lg:text-left">
                "Naš posao nije samo prodaja, već partnerstvo. Svakom klijentu pristupamo lično, jer verujemo da se vrhunski rezultati grade samo zajedno."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
