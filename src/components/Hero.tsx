import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sono-green to-green-900 text-white p-6">
      <h1 className="text-4xl font-bold">Turning Ideas into Functional Webpages</h1>
      <p className="text-lg mt-4">Professional web development services for small businesses</p>
      <div className="mt-6">
        <button className="bg-white text-sono-green px-6 py-3 rounded-lg shadow-lg mr-4 hover:bg-gray-100 transition-colors">
          Book an Appointment
        </button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          View Services
        </button>
      </div>
    </section>
  );
}; 