
import './App.css';

import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
// import Nav from './components/Nav';
import { useState } from 'react';
import Template from './pages/Template';
import SecretPage from './pages/SecretPage';
import Signup from './pages/SignUp';
import Login from './pages/Login';
function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isHomePage={isHomePage}/>
      
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Home setIsHomePage={setIsHomePage} />} />
          <Route exact path="about" element={<About setIsHomePage={setIsHomePage} />} />
          <Route exact path="contact" element={<Contact setIsHomePage={setIsHomePage} />} />
          <Route exact path="services" element={<Services setIsHomePage={setIsHomePage} />} />
          <Route exact path="templates" element={<Template setIsHomePage={setIsHomePage} />} />
          <Route exact path="secretPage" element={<SecretPage setIsHomePage={setIsHomePage} />} />
          <Route exact path="signup" element={<Signup setIsHomePage={setIsHomePage} />} />
          <Route exact path="login" element={<Login setIsHomePage={setIsHomePage} />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
