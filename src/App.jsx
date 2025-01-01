import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Project from "./pages/Project.jsx";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    return (
        <Router>
            <SpeedInsights />
            <main className='max-w-7xl mx-auto'>
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero/>
                            <About/>
                            <Contact/>
                        </>
                    } />
                    <Route path="/project" element={<Project/>} />
                </Routes>
                <Footer/>
            </main>
        </Router>
    );
}

export default App;