import { Route, Routes } from 'react-router-dom';
import Contact from '../src/pages/contact'; // Adjust the path if needed
import Footer from '../src/pages/footer'; // Adjust the path if needed
import Home from '../src/pages/LandingPage'; // Adjust the path if needed
import AboutUs from '../src/pages/about-us'; // Adjust the path if needed
import Header from '../src/pages/header'; // Adjust the path if needed
import Equipment from '../src/pages/equipment'; // Adjust the path if needed
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
