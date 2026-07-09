import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const lineVariants = {
  hidden: { y: '110%' },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
}

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="home" className="min-h-screen flex flex-col bg-cream overflow-hidden">

      <div className="flex-1 grid lg:grid-cols-2">

        {/* Left — text */}
        <div className="flex flex-col justify-center pt-28 pb-16 lg:py-0 px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="hidden sm:flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-px bg-terra inline-block flex-none" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-terra-dark">{hero.eyebrow}</span>
            </motion.div>

            <h1 className="font-serif text-[clamp(4rem,9.5vw,8rem)] text-ink leading-[0.88] -ml-0.5 mb-10">
              <div className="overflow-y-hidden pb-2 pr-2 -mr-2">
                <motion.span className="block" variants={lineVariants} initial="hidden" animate="visible" custom={0.18}>
                  {hero.h1_1}
                </motion.span>
              </div>
              <div className="overflow-y-hidden pb-2 pr-2 -mr-2">
                <motion.span className="block text-terra italic" variants={lineVariants} initial="hidden" animate="visible" custom={0.34}>
                  {hero.h1_em}
                </motion.span>
              </div>
              <div className="overflow-y-hidden pb-2 pr-2 -mr-2">
                <motion.span className="block" variants={lineVariants} initial="hidden" animate="visible" custom={0.5}>
                  {hero.h1_3}
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
              className="text-ink-soft leading-relaxed mb-10 max-w-[38ch]"
            >
              {hero.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.82 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#products"
                className="bg-terra text-white px-7 py-3.5 rounded-full font-semibold inline-block hover:bg-terra-dark transition-colors"
              >
                {hero.cta1}
              </a>
              <a
                href="#b2b"
                className="border border-ink/20 text-ink px-7 py-3.5 rounded-full font-semibold inline-block hover:border-ink/40 transition-colors"
              >
                {hero.cta2}
              </a>
            </motion.div>

          </div>
        </div>

        {/* Right — image bleeds to viewport edge, full height */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <img
            src="/img-hero.jpeg"
            alt="Montanara freška pašta"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-y-0 left-0 w-40 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #FBF4E9, transparent)' }}
          />
        </motion.div>

        {/* Mobile — image below text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="relative lg:hidden"
        >
          <img
            src="/img-hero.jpeg"
            alt="Montanara freška pašta"
            className="w-full object-cover aspect-[4/3]"
          />
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #FBF4E9, transparent)' }}
          />
        </motion.div>

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
