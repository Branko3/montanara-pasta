import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const TAG_BG = ['#4A6B2A', '#7E2040', '#2A2A2E']
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-60px' }

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } },
}

export default function Products() {
  const { t } = useLanguage()
  const { products: p } = t

  return (
    <section id="products" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="hidden sm:flex items-center gap-3 mb-5">
            <span className="font-serif text-ink/25 text-[0.7rem] tracking-widest tabular-nums">02</span>
            <span className="w-5 h-px bg-terra/60 inline-block flex-none" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-terra-dark">{p.eyebrow}</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-4">
            {p.h2}
          </motion.h2>
          <motion.p variants={fadeUp} className="hidden sm:block text-ink-soft text-lg max-w-[55ch]">{p.intro}</motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-2 mt-5">
            <span className="inline-flex items-center gap-2 bg-terra/10 text-terra-dark text-sm font-semibold px-4 py-2 rounded-full border border-terra/20">
              <span className="w-1.5 h-1.5 rounded-full bg-terra inline-block" />
              {p.freshPromise}
            </span>
          </motion.div>
        </motion.div>

        {/* Featured — Spaghetti */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-ink/8 mb-8 grid md:grid-cols-[1.1fr_1fr]"
        >
          {/* Visual — product photo */}
          <div className="relative min-h-[280px] md:min-h-[340px] overflow-hidden">
            <img
              src="/img-spaghetti.jpeg"
              alt="Montanara špagete — svježe tijesto"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-terra-dark mb-2">
              {p.spKicker}
            </span>
            <h3 className="font-serif text-[2rem] text-ink mb-3">{p.spName}</h3>
            <p className="hidden sm:block text-ink-soft leading-relaxed mb-6">{p.spDesc}</p>
            <div className="flex flex-wrap gap-6">
              {p.spMeta.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-lg text-ink font-semibold">{m.value}</p>
                  <p className="text-sm text-ink-soft">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tagliatelle intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9 }}
          className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-8"
        >
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <motion.img
              src="/img-tagliatelle.jpeg"
              alt="Taljatele — Montanara"
              className="w-full object-cover aspect-[16/10]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </div>
          <div>
            <h3 className="font-serif text-[1.7rem] text-ink mb-3">{p.tgH3}</h3>
            <p className="hidden sm:block text-ink-soft leading-relaxed">{p.tgLead}</p>
          </div>
        </motion.div>

        {/* 3 colour cards — stagger */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          variants={staggerContainer}
        >
          {p.tagliatelle.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.22 }}
              className="relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-end p-7 shadow-md cursor-default"
              style={{ backgroundColor: TAG_BG[i] }}
            >
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(0,0,0,0.35))' }}
              />
              <div className="relative z-10">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/80 mb-1">
                  {item.tag}
                </p>
                <h4 className="font-serif text-[1.45rem] text-white font-semibold mb-2">
                  {item.name}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.pairings.map((pair) => (
                    <span
                      key={pair}
                      className="text-[0.73rem] font-medium px-2.5 py-1 rounded-full border border-white/30 text-white/80"
                    >
                      {pair}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
