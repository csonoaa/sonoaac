import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sono-green text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Phone: <a href="tel:862-405-2498" className="hover:text-sono-pink transition-colors">862-405-2498</a></p>
            <p>Email: <a href="mailto:sonoaabarah@gmail.com" className="hover:text-sono-pink transition-colors">sonoaabarah@gmail.com</a></p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
              <a href="#" className="hover:text-sono-pink transition-colors">Facebook</a>
              <a href="#" className="hover:text-sono-pink transition-colors">Instagram</a>
              <a href="#" className="hover:text-sono-pink transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SonoAAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 