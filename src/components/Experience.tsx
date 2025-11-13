import React from 'react';
import { Briefcase, ExternalLink, Users, TrendingUp, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: "Managing Director",
      company: "Wegmed",
      website: "https://wegmed.com/",
      period: "Current",
      description: "Overseeing the strategic development and multi-sector operations of Wegmed, a growing business group with ventures. Responsible for business expansion, partnerships, and overall organizational leadership across diverse industries.",
      responsibilities: [
        "Strategic leadership and company vision development",
        "Multi-sector business development and expansion",
        "Team leadership and organizational growth",
        "Partnership development and stakeholder management",
        "Cross-industry operations and strategic planning"
      ],
      achievements: [
        {
          icon: <Users className="w-5 h-5" />,
          title: "Team Leadership",
          description: "Building and leading diverse teams across multiple business sectors and industries"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Growth Strategy",
          description: "Developing scalable business models and expansion strategies across various sectors"
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Innovation Focus",
          description: "Driving innovation and technology integration across diverse business ventures"
        }
      ],
      impactVision: "As Managing Director of Wegmed, I'm committed to building a diversified business group that leverages technology and innovation across multiple sectors. My technical background in IoT and embedded systems enables us to integrate cutting-edge solutions into various industries, creating sustainable growth and meaningful impact in the communities we serve."
    },
    {
      position: "Technician",
      company: "ASIQ Electronic",
      website: null,
      period: "2022 - 2023",
      description: "Gained hands-on experience in electronic systems maintenance and repair.",
      responsibilities: [
        "Electronic systems maintenance and troubleshooting",
        "Component-level repair and diagnostics",
        "Quality control and testing procedures",
        "Customer service and technical support",
        "Equipment calibration and maintenance"
      ],
      achievements: [
        {
          icon: <Users className="w-5 h-5" />,
          title: "Technical Skills",
          description: "Developed practical expertise in electronic repair and maintenance"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Problem Solving",
          description: "Enhanced diagnostic and troubleshooting capabilities"
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Customer Focus",
          description: "Provided reliable technical support and service solutions"
        }
      ],
      impactVision: "This role provided valuable hands-on experience with electronic systems, strengthening my practical skills in diagnostics, repair, and maintenance. The experience enhanced my understanding of real-world electronic applications and customer service, which complements my academic knowledge and current leadership role."
    }
  ];

  const experience = {
    position: "Managing Director",
    company: "Wegmed",
    website: "https://wegmed.com/",
    period: "Current",
    description: "Overseeing the strategic development and multi-sector operations of Wegmed, a growing business group with ventures. Responsible for business expansion, partnerships, and overall organizational leadership across diverse industries.",
    responsibilities: [
      "Strategic leadership and company vision development",
      "Multi-sector business development and expansion",
      "Team leadership and organizational growth",
      "Partnership development and stakeholder management",
      "Cross-industry operations and strategic planning"
    ],
    achievements: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Leadership",
        description: "Building and leading diverse teams across multiple business sectors and industries"
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Growth Strategy",
        description: "Developing scalable business models and expansion strategies across various sectors"
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Innovation Focus",
        description: "Driving innovation and technology integration across diverse business ventures"
      }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leadership experience in multi-sector business development, combining entrepreneurial vision with technical expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 md:p-12 ${
                index === 0 
                  ? 'bg-gradient-to-br from-blue-50 to-teal-50' 
                  : 'bg-gradient-to-br from-gray-50 to-blue-50'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full mr-4 ${
                      index === 0 ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        <span className="text-xl">{exp.company}</span>
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </a>
                    ) : (
                      <span className="text-xl font-semibold text-gray-900">{exp.company}</span>
                    )}
                  </div>

                  <div className="grid gap-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className={`mr-3 ${
                            index === 0 ? 'text-blue-600' : 'text-gray-600'
                          }`}>
                            {achievement.icon}
                          </div>
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Role Overview</h4>
                  <p className="text-gray-600 leading-relaxed mb-8">{exp.description}</p>
                  
                  <div className="mb-8">
                    <h5 className="font-semibold text-gray-900 mb-4">Key Responsibilities:</h5>
                    <div className="grid gap-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mr-4 mt-2 flex-shrink-0 ${
                            index === 0 ? 'bg-blue-600' : 'bg-gray-600'
                          }`}></div>
                          <span className="text-gray-600">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-3">Impact & Vision</h5>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.impactVision}
                    </p>
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

export default Experience;