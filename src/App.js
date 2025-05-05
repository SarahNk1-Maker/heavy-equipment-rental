import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Home from './pages/LandingPage';
import AboutUs from './pages/about-us';
import Header from './pages/header';
import Equipment from './pages/equipment';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
