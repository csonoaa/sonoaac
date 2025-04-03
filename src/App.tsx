import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, Menu, X, ChevronDown, Monitor, Sun, Moon, Code, Shield, Briefcase, Globe, Database } from 'lucide-react';
import { Booking } from './components/Booking';
import { OtherServices } from './components/OtherServices';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Other Services', href: '#other-services' },
    { name: 'Contact', href: '#contact' }
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
    setCurrentPage(href.replace('#', ''));
    const section = document.getElementById(href.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`} style={gradientStyle}>
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

      {/* Hero Section */}
      <main>
        <div className="relative pt-16" id="home">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Welcome to </span>
                <span className={`block ${isDarkMode ? 'text-blue-400' : 'text-orange-600'} transition-colors duration-500`}>
                  sonoAAc
                </span>
              </h1>
              <p className={`mt-3 max-w-md mx-auto text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} 
                sm:text-lg md:mt-5 md:text-xl md:max-w-3xl transition-colors duration-500`}>
                Professional web development and appointment booking platform. 
                Create your digital presence with our expert services.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#services"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md 
                    ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-orange-600 hover:bg-orange-700'} 
                    text-white md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#about"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md 
                    ${isDarkMode ? 'text-blue-400 bg-gray-800 hover:bg-gray-700' : 'text-orange-600 bg-white hover:bg-gray-50'} 
                    md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-16 transition-colors duration-500`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
              <div className="mt-8 max-w-3xl mx-auto">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hi, I'm Mark, a Computer Science major with a focus in Cybersecurity and a minor in Business. 
                  With my diverse background in technology and business, I'm passionate about helping businesses 
                  establish and enhance their web presence. I understand the challenges businesses face in the 
                  digital world and I'm here to make your transition to the web seamless and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 transition-colors duration-500`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: 'Web Development', desc: 'Custom websites tailored to your needs' },
                { icon: Shield, title: 'Cybersecurity', desc: 'Secure solutions for your digital presence' },
                { icon: Calendar, title: 'Appointment Booking', desc: 'Streamlined scheduling systems' },
                { icon: Code, title: 'Custom Solutions', desc: 'Tailored development services' },
                { icon: Database, title: 'Database Design', desc: 'Efficient data management systems' },
                { icon: Briefcase, title: 'Business Integration', desc: 'Seamless business process automation' }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} 
                    p-6 rounded-lg shadow-lg transform transition-all duration-300 
                    hover:scale-105 hover:rotate-1 hover:shadow-xl
                    group perspective`}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <service.icon 
                    className={`mx-auto h-12 w-12 mb-4 
                      ${isDarkMode ? 'text-blue-400' : 'text-orange-600'}
                      group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <h3 className={`text-xl font-semibold text-center mb-2 
                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Services Section */}
        <div id="other-services" className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
          <OtherServices />
        </div>
      </main>

      {/* Booking Modal */}
      <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">sonoAAc</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>862-405-2498</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>sonoaabarah@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} sonoAAc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;