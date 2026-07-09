import { motion } from 'framer-motion'
import { Wheat, Scale, Palette, Timer, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const ICONS: Record<string, LucideIcon> = { Wheat, Scale, Palette, Timer }

const VP = { once: true, margin: '-60px' }

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 20 } },
}

export default function WhyUs() {
  const { t } = useLanguage()
  const { whyUs } = t

  return (
    <section className="bg-cream-2 py-16 border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 divide-ink/10 md:divide-x"
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          variants={staggerContainer}
        >
          {whyUs.items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div key={item.heading} variants={fadeUp} className="md:px-6 first:pl-0">
                <div className="w-10 h-10 rounded-lg bg-terra/10 flex items-center justify-center text-terra-dark mb-3">
                  <Icon size={18} />
                </div>
                <p className="font-serif text-base font-semibold text-ink mb-1">{item.heading}</p>
                <p className="text-sm text-ink-soft leading-snug">{item.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
