import React from 'react';
import { Users, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "To develop innovative and efficient automation solutions by combining instrumentation, electronics, and programming skills, while continuously learning and adapting to emerging technologies in IoT, robotics, and industrial systems."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Pursuing BET Hons in Instrumentation & Automation Technology"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "CEO at Wegmed, driving innovation in healthcare technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="PLC Control Panel and Automation Systems"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I’m an aspiring Instrumentation and Automation Engineer passionate about bringing smart systems to life through a blend of electronics, coding, and creativity. My interests revolve around IoT, robotics, and industrial automation, where I enjoy turning ideas into real-world solutions.

I have hands-on experience in microcontroller programming, PLC automation, and hardware–software integration, working with tools like Arduino, ESP32, SolidWorks, AutoCAD, MATLAB/Octave, Proteus, and SimulIDE. I love designing and experimenting with circuits, sensors, and control systems to build efficient and intelligent automation projects.
            </p>

            

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 text-blue-600 group-hover:text-teal-600 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;