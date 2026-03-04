import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CIIStorage from './pages/solutions/CIIStorage';
import Microgrid from './pages/solutions/Microgrid';
import Greenhouse from './pages/solutions/Greenhouse';
import NeurGridOS from './pages/technology/NeurGridOS';
import Compliance from './pages/technology/Compliance';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<CIIStorage />} />
          <Route path="/solutions/cii-storage" element={<CIIStorage />} />
          <Route path="/solutions/microgrid" element={<Microgrid />} />
          <Route path="/solutions/greenhouse" element={<Greenhouse />} />
          <Route path="/technology" element={<NeurGridOS />} />
          <Route path="/technology/neurgrid-os" element={<NeurGridOS />} />
          <Route path="/technology/compliance" element={<Compliance />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
