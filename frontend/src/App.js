import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio';
import NewProject from './components/NewProject';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import ImageCarousel from './components/ImageCarousel';
import Intro from './components/Intro';
import Footer from './components/Footer';


const App = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/amit-kumar-498214230/';
    const resumeUrl = 'https://docs.google.com/document/d/1Xly8wVQg4nqJZ4SOcaIecmxtc3iaAP8x/edit#heading=h.gjdgxs';

    return (
        <Router>
            <div className="App">
                <Navbar linkedInUrl={linkedInUrl} resumeUrl={resumeUrl} />
                <MainRoutes />
                <Footer />
          
            </div>
        </Router>
    );
};

const MainRoutes = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && <Intro />} {/* Insert the Intro component */}
            {location.pathname === '/' && <ImageCarousel />}
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/newproject" element={<NewProject />} />
            </Routes>
        </>
    );
};

export default App;
