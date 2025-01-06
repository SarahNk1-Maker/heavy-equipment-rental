import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact'; // Adjust the path if needed
import Footer from './pages/footer'; // Adjust the path if needed
import Home from './pages/LandingPage'; // Adjust the path if needed
import AboutUs from './pages/about-us'; // Adjust the path if needed
import Header from './pages/header'; // Adjust the path if needed
import Equipment from './pages/equipment'; // Adjust the path if needed
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
      <Header/>
      <Footer />
     
    </>
  );
}

export default App;
