import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.215, 0.61, 0.355, 1]
const VP = { once: true, margin: '-60px' }

const iconRow = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function Contact() {
  const { t } = useLanguage()
  const { contact: c } = t

  return (
    <section id="contact" className="py-28 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — stagger in */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="hidden sm:inline-flex items-center gap-2 text-terra-dark text-xs font-bold tracking-[0.2em] uppercase mb-5"
            >
              <span className="w-6 h-0.5 bg-terra inline-block" />
              {c.eyebrow}
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
              className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-3"
            >
              {c.h2}
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-ink-soft text-lg mb-10"
            >
              {c.p}
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={iconRow} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-terra-dark flex-none">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">{c.phoneLabel}</p>
                  <a href="tel:+38269489187" className="text-ink-soft hover:text-terra-dark transition-colors block">
                    069 / 489 / 187
                  </a>
                  <a href="tel:+38268436643" className="text-ink-soft hover:text-terra-dark transition-colors block">
                    068 / 436 / 643
                  </a>
                </div>
              </motion.div>

              <motion.div variants={iconRow} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-terra-dark flex-none">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">{c.emailLabel}</p>
                  <a href="mailto:dipastapg@gmail.com" className="text-ink-soft hover:text-terra-dark transition-colors">
                    dipastapg@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={iconRow} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-terra-dark flex-none">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">{c.addrLabel}</p>
                  <span className="text-ink-soft">
                    {c.addrLine1}<br />{c.addrLine2}
                  </span>
                </div>
              </motion.div>

              <motion.div variants={iconRow} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-terra-dark flex-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">{c.igLabel}</p>
                  <a
                    href="https://instagram.com/montanara_fresh_pasta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-terra-dark transition-colors"
                  >
                    @montanara_fresh_pasta
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — image slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.9, ease: EASE }}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <motion.img
              src="/img-contact.jpeg"
              alt="Montanara freška pašta — pakovanje"
              className="w-full object-cover aspect-[4/5]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
