import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
