import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg mb-2">
              Phone: <a href="tel:862-405-2498" className="text-sono-green hover:text-sono-orange transition-colors">862-405-2498</a>
            </p>
            <p className="text-lg">
              Email: <a href="mailto:sonoaabarah@gmail.com" className="text-sono-green hover:text-sono-orange transition-colors">sonoaabarah@gmail.com</a>
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sono-orange"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sono-orange"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sono-orange"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sono-green text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sono-orange transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}; 