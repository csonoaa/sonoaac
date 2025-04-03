import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            SonoAAC is dedicated to providing top-notch web development services to small businesses.
            We help transform your ideas into beautiful, functional websites that drive growth and success.
          </p>
          <p className="text-lg">
            Our team of experienced developers and designers work closely with you to understand your needs
            and deliver solutions that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  );
}; 