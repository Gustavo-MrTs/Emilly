import './index.css'
import HeroSection from './components/HeroSection'
import AttributesGrid from './components/AttributesGrid'
import LoreSection from './components/LoreSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#080810' }}>
      {/* Navigation anchor links (hidden but accessible) */}
      <nav
        aria-label="Navegação de página"
        className="sr-only"
      >
        <a href="#hero">Hero</a>
        <a href="#attributes">Atributos</a>
        <a href="#lore">Lore</a>
      </nav>

      {/* Sections */}
      <main>
        <HeroSection />
        <AttributesGrid />
        <LoreSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
