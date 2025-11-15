import { useEffect } from 'react';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sections from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Adicionar classe para animações suaves
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Sections /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
