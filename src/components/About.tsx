import React from 'react';
import { Code, Globe, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            We specialize in creating modern, efficient, and scalable web solutions
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Frontend Development</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300 text-center">
                Modern, responsive web applications using React, Vue, and other cutting-edge technologies
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900">
                <Database className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Backend Development</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300 text-center">
                Robust and scalable server solutions with Node.js, Python, and cloud technologies
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900">
                <Globe className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Web Solutions</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300 text-center">
                Complete web solutions including hosting, maintenance, and optimization
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Why Choose Us?
                </h3>
                <div className="mt-5">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                        Years of experience in web development
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                        Custom solutions tailored to your needs
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                        Ongoing support and maintenance
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 