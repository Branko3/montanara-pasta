import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const { footer } = t

  const footLinks = [
    { name: footer.links.story, href: '#story' },
    { name: footer.links.products, href: '#products' },
    { name: footer.links.b2b, href: '#b2b' },
    { name: footer.links.contact, href: '#contact' },
    {
      name: 'Instagram',
      href: 'https://instagram.com/montanara_fresh_pasta',
      external: true,
    },
  ]

  return (
    <footer className="bg-ink">

      {/* Brand block */}
      <div className="py-20 flex flex-col items-center text-center border-b border-white/8">
        <a href="#home" className="flex flex-col items-center gap-5 group">
          <img
            src="/logo.png"
            alt="Montanara"
            className="h-14 w-auto brightness-0 invert opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <span className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] text-cream tracking-tight leading-none">
            Montanara
          </span>
        </a>
        <p className="text-cream/35 text-sm tracking-[0.15em] uppercase mt-5 font-medium">
          {footer.tagline}
        </p>
      </div>

      {/* Links + copyright */}
      <div className="py-8 max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-cream/45 hover:text-cream transition-colors text-sm"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
