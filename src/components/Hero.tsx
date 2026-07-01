import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.215, 0.61, 0.355, 1]

const lineVariants = {
  hidden: { y: '110%' },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.85, ease: EASE, delay },
  }),
}

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="home" className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_0.82fr] gap-14 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                className="hidden sm:inline-flex items-center gap-2 text-terra-dark text-xs font-bold tracking-[0.22em] uppercase mb-8"
              >
                <span className="w-6 h-0.5 bg-terra inline-block" />
                {hero.eyebrow}
              </motion.div>

              {/* H1 — each line clips and reveals upward */}
              <h1 className="font-serif text-[clamp(3rem,7.5vw,5.6rem)] text-ink leading-[1.0] mb-8 -ml-0.5">
                <div className="overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                  >
                    {hero.h1_1}
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.span
                    className="block text-terra-dark italic"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.38}
                  >
                    {hero.h1_em}
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.54}
                  >
                    {hero.h1_3}
                  </motion.span>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.72 }}
                className="text-ink-soft text-lg leading-relaxed max-w-[38ch] mb-10"
              >
                {hero.lead}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.88 }}
                className="flex flex-wrap gap-3"
              >
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="bg-terra text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-terra/25 inline-block"
                >
                  {hero.cta1}
                </motion.a>
                <motion.a
                  href="#b2b"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="border border-ink/20 text-ink px-7 py-3.5 rounded-full font-semibold inline-block"
                >
                  {hero.cta2}
                </motion.a>
              </motion.div>
            </div>

            {/* Right — hero photo */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.35 }}
              className="relative"
            >
              <img
                src="/img-hero.jpeg"
                alt="Montanara freška pašta"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
              />
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 1.05 }}
                className="hidden lg:block absolute -left-5 bottom-12 bg-white rounded-2xl px-5 py-3.5 shadow-2xl"
              >
                <p className="font-serif text-[0.95rem] font-semibold text-ink">{hero.tagTitle}</p>
                <p className="text-xs text-ink-soft mt-0.5">{hero.tagSub}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Badges — infinite marquee */}
      <div className="bg-ink text-cream py-4 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...hero.badges, ...hero.badges].map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-[0.88rem] font-medium whitespace-nowrap mx-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terra inline-block flex-none" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
