
import './App.css';

import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import Nav from './components/Nav';
import { useState } from 'react';
import Template from './pages/Template';
import ProtectedPage from './pages/ProtectedPage';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

import PaymentForm from './pages/PaymentForm';
import ForgotPassword from './pages/ForgotPassword';
import JobPostings from './pages/JobPostings';
import { ToastContainer } from 'react-toastify';
import ResetPassword from './pages/ResetPassword';
import ScrollToTop from './helper/ScrollToTop';



function App() {
  const [isHomePage, setIsHomePage] = useState(false);



  return (
    <BrowserRouter>
    <ToastContainer />
      <AuthProvider>
        <Navbar isHomePage={isHomePage} />
        {/* <Nav isHomePage={isHomePage} /> */}
        <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home setIsHomePage={setIsHomePage} />} />
            <Route exact path="about" element={<About setIsHomePage={setIsHomePage} />} />
            <Route exact path="contact" element={<Contact setIsHomePage={setIsHomePage} />} />
            <Route exact path="services" element={<Services setIsHomePage={setIsHomePage} />} />
            <Route exact path="templates" element={<Template setIsHomePage={setIsHomePage} />} />
            <Route exact path="signup" element={<Signup setIsHomePage={setIsHomePage} />} />
            <Route exact path="login" element={<Login setIsHomePage={setIsHomePage} />} />
            <Route exact path="ProtectedPage" element={<ProtectedPage setIsHomePage={setIsHomePage} />} />
            
            <Route exact path="payment" element={<PaymentForm />} />
            <Route exact path="new-password" element={<ForgotPassword />} />
            <Route exact path="reset-password" element={<ResetPassword />} />
            <Route exact path="Jobs" element={<JobPostings setIsHomePage={setIsHomePage}/>} /> 

          </Routes>
        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
