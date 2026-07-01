import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Nutrition from './components/Process'
import B2B from './components/B2B'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      {/* Subtle grain texture overlay — adds tactile depth */}
      <div
        className="grain-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        aria-hidden
      />
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Nutrition />
          <B2B />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
