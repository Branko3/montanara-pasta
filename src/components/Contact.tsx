import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-60px' }

const iconRow = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } },
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
      -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
      -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
      .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
      -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51
      -.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
      -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074
      .149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625
      .712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
      .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882
      a.5.5 0 00.61.635l6.197-1.624A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z
      M12 22a9.946 9.946 0 01-5.073-1.384l-.363-.215-3.761.986.998-3.648-.236-.374
      A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
)

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
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="hidden sm:flex items-center gap-3 mb-5"
            >
              <span className="font-serif text-ink/25 text-[0.7rem] tracking-widest tabular-nums">05</span>
              <span className="w-5 h-px bg-terra/60 inline-block flex-none" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-terra-dark">{c.eyebrow}</span>
            </motion.div>
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

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="mb-10"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-terra-dark mb-5">{c.howTitle}</p>
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                <div
                  className="hidden sm:block absolute h-px border-t border-dashed border-terra/30"
                  style={{ top: '1.25rem', left: 'calc(100% / 6)', right: 'calc(100% / 6)' }}
                />
                {c.howSteps.map((s) => (
                  <div key={s.step} className="relative flex sm:flex-col items-center gap-3 sm:text-center">
                    <span className="font-serif w-10 h-10 rounded-full bg-cream flex items-center justify-center text-terra-dark font-semibold flex-none border border-terra/30">
                      {s.step}
                    </span>
                    <p className="text-ink-soft text-sm leading-snug sm:px-2">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

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

              <motion.div variants={iconRow} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-terra-dark flex-none">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">{c.waLabel}</p>
                  <a
                    href="https://wa.me/38269489187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-terra-dark transition-colors"
                  >
                    069 / 489 / 187
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — image slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9 }}
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
