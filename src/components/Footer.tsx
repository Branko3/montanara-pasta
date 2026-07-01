import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const { footer } = t

  const footLinks = [
    { name: footer.links.story, href: '#story' },
    { name: footer.links.products, href: '#products' },
    { name: footer.links.b2b, href: '#b2b' },
    { name: footer.links.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-ink text-cream/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b border-white/12">
          <a href="#home" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Montanara" className="h-8 w-auto brightness-0 invert opacity-80" />
            <span className="font-serif text-xl font-semibold text-cream">Montanara</span>
          </a>
          <div className="flex flex-wrap gap-6">
            {footLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors text-[0.9rem]">
                {l.name}
              </a>
            ))}
            <a
              href="https://instagram.com/montanara_fresh_pasta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-[0.9rem]"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
          <p className="hidden sm:block">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
