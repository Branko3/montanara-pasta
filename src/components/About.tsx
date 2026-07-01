import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-80px' }

const textChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 20 } },
}

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="story" className="bg-cream-2 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[640px]">

        {/* Left — image bleeds to the left viewport edge */}
        <motion.div
          className="relative min-h-[420px] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 1, ease: EASE }}
        >
          <img
            src="/img-story.jpeg"
            alt="Montanara pašta — domaća proizvodnja"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fade right to blend with section background */}
          <div
            className="absolute inset-y-0 right-0 w-32 pointer-events-none hidden lg:block"
            style={{ background: 'linear-gradient(to left, #F4E8D5, transparent)' }}
          />
          {/* Stamp */}
          <div
            className="absolute top-6 right-6 lg:top-10 lg:-right-6 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center text-center text-white text-[0.68rem] font-serif leading-snug p-2.5 shadow-xl z-10"
            style={{ background: '#B5302A', transform: 'rotate(-8deg)' }}
          >
            {about.stamp}
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          className="flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-16 lg:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } }}
        >

          <motion.div variants={textChild} className="hidden sm:flex items-center gap-3 mb-6">
            <span className="font-serif text-ink/25 text-[0.7rem] tracking-widest tabular-nums">01</span>
            <span className="w-5 h-px bg-terra/60 inline-block flex-none" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-terra-dark">{about.eyebrow}</span>
          </motion.div>

          <motion.h2
            variants={textChild}
            className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-6 leading-tight"
          >
            {about.h2}
          </motion.h2>

          <motion.div variants={textChild} className="space-y-4 text-ink-soft leading-relaxed mb-8">
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
            variants={textChild}
            className="font-serif italic text-[1.15rem] leading-snug text-ink border-l-[3px] border-terra pl-5"
          >
            {about.quote}
          </motion.blockquote>

        </motion.div>

      </div>
    </section>
  )
}
