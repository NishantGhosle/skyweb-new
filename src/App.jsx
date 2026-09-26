import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Solutions from './components/Solutions.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import Principles from './components/Principles.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <CaseStudies />
        <Process />
        <About />
        <Principles />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
