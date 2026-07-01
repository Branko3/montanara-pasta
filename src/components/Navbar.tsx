import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../i18n/translations'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: t.nav.story, href: '#story' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.nutrition, href: '#nutrition' },
    { name: t.nav.b2b, href: '#b2b' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const langs: { code: Lang; label: string }[] = [
    { code: 'cnr', label: 'MNE' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Montanara" className="h-9 w-auto" />
            <span className="font-serif font-semibold text-xl text-ink tracking-tight">Montanara</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-soft hover:text-terra-dark transition-colors text-[0.92rem] font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center border border-ink/20 rounded-full overflow-hidden">
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                    lang === code
                      ? 'bg-terra text-white'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <a
              href="https://instagram.com/montanara_fresh_pasta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-cream px-4 py-2 rounded-full text-[0.88rem] font-semibold hover:bg-terra-dark transition-colors"
            >
              Instagram
            </a>
          </div>

          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={t.nav.menuLabel}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden border-t border-ink/10 bg-cream"
            >
              <div className="py-5 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    className="text-ink-soft hover:text-terra-dark transition-colors font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="flex items-center self-start border border-ink/20 rounded-full overflow-hidden">
                  {langs.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                        lang === code
                          ? 'bg-terra text-white'
                          : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <a
                  href="https://instagram.com/montanara_fresh_pasta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start bg-ink text-cream px-5 py-2 rounded-full text-sm font-semibold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
