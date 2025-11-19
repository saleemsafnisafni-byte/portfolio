import React from 'react';
import { Github, ExternalLink, Camera, Zap, Cpu } from 'lucide-react';
import  Elepent from "../asserts/elepent.jpg"
import line from "../asserts/lineflower.png"

const Projects = () => {
  const projects = [
    {
      title: "Electric Fence Energizer",
      description: "An embedded electronics project designed to generate high-voltage pulses for livestock control and perimeter security. Uses ATmega328P microcontroller to drive an inverter circuit for MOSFETs with integrated alarm system. Accepts 12V DC or 220V AC input and provides 1000V output with 100mA current at 2 pulses per second.",
      image: Elepent,
      technologies: ["ATmega328P", "MOSFET Inverter", "Power Electronics", "Embedded C", "High Voltage Systems", "PCB Design"],
      github: "https://github.com/saleemsafnisafni-byte/electric-fence-energizer",
      features: [
        "High-voltage pulse generation (1000V)",
        "Dual input support (12V DC / 220V AC)",
        "Safe livestock control system",
        "Integrated alarm functionality",
        "MOSFET-based inverter circuit"
      ],
      icons: [<Zap className="w-5 h-5" />, <Cpu className="w-5 h-5" />, <Camera className="w-5 h-5" />]
    },
    {
      title: "Smart Vehicle Number Plate Detection",
      description: "Developed a smart vehicle number plate detection system using ESP32-CAM for image capture and OpenCV for image processing. The system detects and extracts number plates from vehicle images in real time, providing an efficient and low-cost solution for traffic monitoring and automation.",
      image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["ESP32-CAM", "OpenCV", "Python", "Real-time Processing", "Computer Vision"],
      github: "https://github.com/saleemsafnisafni-byte/Smart-Vehicle-Number-Plate-Detection",
      features: [
        "Real-time number plate detection",
        "ESP32-CAM integration",
        "OpenCV image processing",
        "Low-cost implementation",
        "Traffic monitoring solution"
      ],
      icons: [<Camera className="w-5 h-5" />, <Zap className="w-5 h-5" />, <Cpu className="w-5 h-5" />]
    },
    {
      title: "Line Following Robot with Obstacle Detection",
      description: "An autonomous robot that combines line following capabilities with intelligent obstacle detection and avoidance. Built using Arduino microcontroller with IR sensors for line detection and ultrasonic sensors for obstacle detection, creating a smart navigation system for automated guided vehicles.",
      image: line,
      technologies: ["Arduino", "IR Sensors", "Ultrasonic Sensors", "Motor Control", "Embedded C", "Autonomous Navigation"],
      github: "https://github.com/saleemsafnisafni-byte/line-following-and-obstacle-detection",
      features: [
        "Autonomous line following navigation",
        "Real-time obstacle detection and avoidance",
        "IR sensor array for precise line tracking",
        "Ultrasonic sensor integration",
        "Smart decision-making algorithms"
      ],
      icons: [<Cpu className="w-5 h-5" />, <Zap className="w-5 h-5" />, <Camera className="w-5 h-5" />]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative IoT and embedded systems projects that demonstrate practical applications of technology in solving real-world problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6"></div>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {project.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="bg-white/90 p-2 rounded-full text-blue-600">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                    {(project.title === "Electric Fence Energizer" || project.title === "Line Following Robot with Obstacle Detection") && (
                      <a
                        href={project.title === "Electric Fence Energizer" ? "https://drive.google.com/file/d/1fwy3NhG2aM_A7V3LZK2k0VW2aplA58Xk/view?usp=drive_link" : "https://drive.google.com/file/d/1QVqNp02J9mv_J8uxP7Ji0yMK9gvNESN7/view?usp=drive_link"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {project.title === "Electric Fence Energizer" ? "Live Demo" : "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">More exciting projects coming soon!</p>
          <a
            href="https://github.com/saleemsafnisafni-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;