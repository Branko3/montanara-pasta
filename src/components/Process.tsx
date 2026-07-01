import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-60px' }

export default function Nutrition() {
  const { t } = useLanguage()
  const { nutrition: n } = t

  return (
    <section id="nutrition" className="py-28 bg-ink text-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">

          {/* Left — text slides in */}
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9 }}
          >
            <div className="hidden sm:flex items-center gap-3 mb-5">
              <span className="font-serif text-cream/20 text-[0.7rem] tracking-widest tabular-nums">03</span>
              <span className="w-5 h-px bg-terra/60 inline-block flex-none" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#F0B98C]">{n.eyebrow}</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-cream mb-4">
              {n.h2}
            </h2>
            <p className="hidden sm:block text-cream/70 text-lg leading-relaxed">{n.sub}</p>
          </motion.div>

          {/* Right — table with stagger rows */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/12"
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9, delay: 0.08 }}
          >
            <div className="flex justify-between items-center px-6 py-4 bg-terra text-white">
              <span className="font-serif text-base">{n.tableH1}</span>
              <span className="font-serif text-base">{n.tableH2}</span>
            </div>
            {n.rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.045 + 0.25 }}
                className={`flex justify-between px-6 py-3 border-t border-white/10 text-[0.96rem] ${
                  row.major ? 'bg-white/4' : ''
                }`}
              >
                <span className="text-cream/85">{row.label}</span>
                <span className="font-semibold tabular-nums">{row.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
