import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BET Hons in Instrumentation and Automation Technology",
      institution: "Faculty of Technology, University of Colombo",
      period: "Currently Pursuing",
      location: "Colombo, Sri Lanka",
      description: "Specializing in IoT systems, embedded programming, and industrial automation. Gaining comprehensive knowledge in instrumentation, control systems, and modern automation technologies.",
      highlights: [
        "Advanced IoT System Design",
        "Embedded Systems Programming",
        "Industrial Automation",
        "Control Systems Engineering",
        "Instrumentation Technology"
      ]
    },
    {
      degree: "Advanced Level",
      institution: "Sammanthurai Central College",
      period: "Completed",
      location: "Sammanthurai, Sri Lanka",
      description: "Completed Advanced Level studies with strong foundation in Mathematics, Physics, and Chemistry, providing the analytical and scientific background essential for engineering studies.",
      highlights: [
        "Strong Mathematical Foundation",
        "Physics and Chemistry Expertise",
        "Analytical Problem Solving",
        "Scientific Research Methods"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic journey focused on building strong foundations in technology and engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{edu.institution}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Areas of Study:</h5>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;