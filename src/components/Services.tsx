import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Custom website development tailored to your business needs, using the latest technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Beautiful and intuitive user interfaces that enhance user experience and engagement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Appointment Booking</h3>
            <p className="text-gray-600">
              Seamless appointment scheduling system to manage your business efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 