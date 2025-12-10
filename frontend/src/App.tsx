import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';

export default function App() {
  return (
    <div className="min-h-screen tech-bg relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950/90 via-slate-900/95 to-blue-950/90 z-0"></div>
      <MatrixRain />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
