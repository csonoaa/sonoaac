import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Calendar, Phone, Mail, Menu, X, ChevronDown, Monitor, Sun, Moon, Code, Shield, Briefcase, Globe, Database } from 'lucide-react';
import { Booking } from './components/Booking';
import { OtherServices } from './components/OtherServices';
import { ShopTemplate } from './components/ShopTemplate';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Separate the main app content from the router wrapper
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Other Services', href: '/#other-services' },
    { name: 'Templates', href: '/templates' },
    { name: 'Contact', href: '/#contact' }
  ];

  // Check if it's nighttime (between 6 PM and 6 AM)
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsDarkMode(hour >= 18 || hour < 6);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic gradient style based on mouse position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
      ${isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(249, 115, 22, 0.15)'} 0%, 
      ${isDarkMode ? 'rgba(17, 24, 39, 1)' : 'rgba(249, 250, 251, 1)'} 70%)`,
    transition: 'background 0.3s ease'
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookingOpen(true);
  };

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const section = document.getElementById(href.replace('/#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setCurrentPage(href.replace('/#', '').replace('/', ''));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Sticky Header */}
      <header className={`fixed w-full z-50 ${isScrolled ? 'shadow-lg' : ''} ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} transition-all duration-500 backdrop-blur-sm`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Monitor className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-orange-600'} transition-colors duration-500`} />
              <span className="ml-2 text-2xl font-bold">
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>sono</span>
                <span className="text-pink-400">AA</span>
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>c</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-600'} 
                hover:bg-opacity-80 transition-all duration-300`}
              >
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-orange-600'} 
                  px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105`}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleBookingClick}
                className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-700 hover:bg-green-800'} 
                text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-gray-600`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-orange-600'} 
                  px-3 py-2 text-base font-medium transition-colors duration-300`}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleBookingClick}
                className={`mt-4 w-full ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-700 hover:bg-green-800'} 
                text-white px-4 py-2 rounded-md transition-colors duration-300`}>
                Book Appointment
              </button>
            </div>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={
          <main className="pt-16">
            <Hero />
            <About />
            <OtherServices />
            <CTA />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/templates" element={<ShopTemplate />} />
        <Route path="/other-services" element={<OtherServices />} />
      </Routes>

      {/* Booking Modal */}
      <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

// Wrapper component that provides the Router context
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}