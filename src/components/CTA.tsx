import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-sono-orange text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing for your business.
          Book a consultation today and take the first step towards your digital success.
        </p>
        <button className="bg-white text-sono-orange px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}; 