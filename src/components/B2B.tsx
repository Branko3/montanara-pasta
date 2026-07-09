import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-60px' }

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
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

export default function B2B() {
  const { t } = useLanguage()
  const { b2b } = t

  return (
    <section id="b2b" className="py-28 bg-cream-2">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={VP}
          transition={{ type: 'spring', stiffness: 75, damping: 18, mass: 1 }}
          className="relative rounded-3xl overflow-hidden p-14 md:p-16"
          style={{ background: 'linear-gradient(135deg, #D96A2B, #B5302A)' }}
        >
          {/* Decorative circles */}
          <div
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.07)', top: '-100px', right: '-80px' }}
          />
          <div
            className="absolute w-56 h-56 rounded-full pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.06)', bottom: '-70px', left: '-40px' }}
          />

          <motion.div
            className="relative z-10 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="hidden sm:flex items-center gap-3 mb-5"
            >
              <span className="font-serif text-white/20 text-[0.7rem] tracking-widest tabular-nums">04</span>
              <span className="w-5 h-px bg-white/40 inline-block flex-none" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">{b2b.eyebrow}</span>
            </motion.div>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } } }}
              className="font-serif text-[clamp(2rem,4vw,2.9rem)] text-white mb-4"
            >
              {b2b.h2}
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="hidden sm:block text-white/90 text-lg leading-relaxed mb-8"
            >
              {b2b.p}
            </motion.p>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {b2b.points.map((pt) => (
                <motion.div
                  key={pt.value}
                  variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } } }}
                >
                  <p className="font-serif text-2xl font-semibold text-white">{pt.value}</p>
                  <p className="text-white/75 text-sm">{pt.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="tel:+38269489187"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="bg-white text-terra-dark font-semibold px-7 py-3.5 rounded-full inline-block"
              >
                {b2b.cta1}
              </motion.a>
              <motion.a
                href="mailto:dipastapg@gmail.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full inline-block"
              >
                {b2b.cta2}
              </motion.a>
              <motion.a
                href="https://wa.me/38269489187"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2"
              >
                <WhatsAppIcon /> {b2b.ctaWhatsApp}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
