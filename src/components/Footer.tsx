import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start">
              Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />{' '}
              and{' '}
              <Code className="w-4 h-4 mx-1 text-blue-400" />{' '}
              by M Saleem Safni
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Passionate about Instrumentation • Automation • PLC Systems • Industrial Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;