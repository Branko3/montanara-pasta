import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const TAG_BG = ['#4A6B2A', '#7E2040', '#2A2A2E']
const EASE: [number, number, number, number] = [0.215, 0.61, 0.355, 1]
const VP = { once: true, margin: '-60px' }

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
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
          <motion.span variants={fadeUp} className="hidden sm:inline-flex items-center gap-2 text-terra-dark text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-6 h-0.5 bg-terra inline-block" />
            {p.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink mb-4">
            {p.h2}
          </motion.h2>
          <motion.p variants={fadeUp} className="hidden sm:block text-ink-soft text-lg max-w-[55ch]">{p.intro}</motion.p>
        </motion.div>

        {/* Featured — Spaghetti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.75, ease: EASE }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-ink/8 mb-8 grid md:grid-cols-[1.1fr_1fr]"
        >
          {/* Visual — cream background with logo watermark */}
          <div
            className="relative min-h-[280px] md:min-h-[340px] flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FBF4E9 0%, #EDD89A 100%)' }}
          >
            <img src="/logo.png" alt="" className="w-40 opacity-[0.12] select-none" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-terra/5" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.75, ease: EASE }}
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
