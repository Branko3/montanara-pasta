import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-60px' }

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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
