import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-sono-orange to-sono-green text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black">sono</span>
            <span className="text-sono-pink">AA</span>
            <span className="text-black">c</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-sono-pink transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-sono-pink transition-colors">About</a></li>
            <li><a href="#" className="hover:text-sono-pink transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-sono-pink transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 