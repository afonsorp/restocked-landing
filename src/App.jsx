import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
