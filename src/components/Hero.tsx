import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Sparkles, Download, Calendar } from 'lucide-react';
import Image from "../../public/safni.jpg"

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Instrumentation & Automation Engineer";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Add your resume download logic here
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Enhanced */}
          <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md text-blue-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg border border-blue-100/50 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4" />
              Welcome to my portfolio
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient">
                  Saleem Safni
                </span>
              </h1>
              
              {/* Typing Animation */}
              <div className="h-24 flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <p className="text-xl lg:text-2xl text-gray-700 font-medium min-h-[2rem] bg-white/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200/50">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              I'm an aspiring Instrumentation and Automation Engineer passionate about bringing smart systems to life through a blend of electronics, coding, and creativity. My interests revolve around IoT, robotics, and industrial automation, where I enjoy turning ideas into real-world solutions.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 py-2">
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-teal-600 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-gray-600 mt-1">Technologies</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span>Explore My Work</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:saleemsafnisafni@gmail.com"
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 flex-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
                
                <button 
                  onClick={downloadResume}
                  className="group border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 flex-1"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Portrait Image Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 group flex justify-center lg:justify-end">
              {/* Portrait Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white/20 w-80 sm:w-96 md:w-108 lg:w-120">
                <img
                  src={Image}
                  alt="Saleem Safni - Instrumentation & Automation Engineer"
                  className="w-full h-96 sm:h-108 md:h-120 lg:h-132 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                
              </div>
              
              {/* Enhanced Floating elements */}
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-yellow-400 rounded-2xl opacity-80 animate-float shadow-lg">
                <div className="absolute inset-2 bg-yellow-300 rounded-xl animate-pulse"></div>
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-teal-500 rounded-2xl opacity-70 animate-float shadow-lg" style={{animationDelay: '2s'}}>
                <div className="absolute inset-2 bg-teal-400 rounded-xl animate-pulse"></div>
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/50 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                 
                </div>
              </div>
            </div>
            
            {/* Enhanced Background decoration */}
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-3xl -z-10 transform rotate-6 transition-transform duration-1000 group-hover:rotate-12"></div>
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-tr from-yellow-600/10 to-red-600/10 rounded-3xl -z-10 transform -rotate-6 transition-transform duration-1000 group-hover:-rotate-12"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-blue-600 hover:text-blue-700 transition-all duration-300 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-2xl hover:shadow-3xl hover:scale-110 border border-blue-100/50"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;