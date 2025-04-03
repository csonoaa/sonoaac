import React from 'react';
import { Camera, Wifi, Shield, Building, Users, Settings, Share2 } from 'lucide-react';

export const OtherServices: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Security Camera Installation',
      description: 'Professional installation of wireless security camera systems for small businesses. Includes HD cameras, remote monitoring, and cloud storage options.',
      features: [
        'Wireless HD cameras',
        'Remote monitoring access',
        'Cloud storage solutions',
        'Motion detection alerts',
        'Night vision capabilities'
      ]
    },
    {
      icon: Wifi,
      title: 'Business WiFi Solutions',
      description: 'Custom WiFi network setup and optimization for small businesses. Ensure reliable connectivity for your customers and staff.',
      features: [
        'Network design and setup',
        'Guest network configuration',
        'Security implementation',
        'Performance optimization',
        'Ongoing maintenance'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions to protect your business from digital threats.',
      features: [
        'Network security assessment',
        'Firewall implementation',
        'Data encryption',
        'Security training',
        '24/7 monitoring'
      ]
    },
    {
      icon: Building,
      title: 'Smart Office Solutions',
      description: 'Transform your office into a smart workspace with automated systems and IoT devices.',
      features: [
        'Smart lighting systems',
        'Climate control automation',
        'Access control systems',
        'Meeting room management',
        'Energy efficiency solutions'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Professional social media management services to enhance your online presence and engage with your audience effectively.',
      features: [
        'Content creation and scheduling',
        'Platform-specific strategy development',
        'Community engagement management',
        'Analytics and performance tracking',
        'Brand consistency maintenance'
      ]
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Other Services</h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Comprehensive technology solutions for your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 