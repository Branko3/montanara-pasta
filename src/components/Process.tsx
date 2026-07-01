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
            initial={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="hidden sm:inline-flex items-center gap-2 text-[#F0B98C] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-6 h-0.5 bg-terra inline-block" />
              {n.eyebrow}
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-cream mb-4">
              {n.h2}
            </h2>
            <p className="hidden sm:block text-cream/70 text-lg leading-relaxed">{n.sub}</p>
          </motion.div>

          {/* Right — table with stagger rows */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/12"
            initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
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
