import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-80px' }

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="story" className="py-28 bg-cream-2 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image slides in from left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <img
              src="/img-story.jpeg"
              alt="Montanara pašta — domaća proizvodnja"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]"
            />
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-center text-white text-[0.78rem] font-serif leading-snug p-3 shadow-xl"
              style={{ background: '#B5302A', transform: 'rotate(-8deg)' }}
            >
              {about.stamp}
            </div>
          </motion.div>

          {/* Right — text stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
              className="hidden sm:inline-flex items-center gap-2 text-terra-dark text-xs font-bold tracking-[0.2em] uppercase mb-5"
            >
              <span className="w-6 h-0.5 bg-terra inline-block" />
              {about.eyebrow}
            </motion.span>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
              className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-6"
            >
              {about.h2}
            </motion.h2>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }}
              className="space-y-4 text-ink-soft leading-relaxed"
            >
              <p>
                {about.p1.split('Semola di grano duro').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}<strong className="text-ink">Semola di grano duro</strong></span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <p className="hidden sm:block">{about.p2}</p>
            </motion.div>

            <motion.blockquote
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } } }}
              className="font-serif italic text-[1.2rem] leading-snug text-ink border-l-[3px] border-terra pl-5 mt-8"
            >
              {about.quote}
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
