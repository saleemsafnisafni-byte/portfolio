import React, { useState } from 'react';
import { Cpu, Code, Wrench, Zap, ChevronDown, ChevronUp } from 'lucide-react';

// Define types
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: Skill[];
}

type ColorType = 'blue' | 'violet' | 'orange' | 'emerald' | 'red' | 'amber';

const Skills = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skillCategories: SkillCategory[] = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Embedded Systems",
      color: "violet",
      skills: [
        { name: "MicroControllers", level: 92 },
        { name: "AVR, PIC", level: 85 },
        { name: "IoT Protocols", level: 88 },
        { name: "Sensor Integration", level: 86 }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PLC & Automation",
      color: "orange",
      skills: [
        { name: "Ladder Logic", level: 90 },
        { name: "Structured Text", level: 88 },
        { name: "Function Block Diagram", level: 87 },
        { name: "SCADA/HMI Integration", level: 85 },
        { name: "I/O Wiring", level: 92 },
        { name: "Sensors & Actuators", level: 89 },
        { name: "PLC Troubleshooting", level: 93 }
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "blue",
      skills: [
        { name: "Ladder Logic", level: 90 },
        { name: "Structured Text", level: 88 },
        { name: "C/C++", level: 82 },
        { name: "Python", level: 78 }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Control Systems",
      color: "emerald",
      skills: [
        { name: "PLC Programming", level: 92 },
        { name: "Process Control", level: 85 },
        { name: "Automation Design", level: 88 },
        { name: "System Integration", level: 86 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Design & Simulation",
      color: "red",
      skills: [
        { name: "PCB Design", level: 90 },
        { name: "SolidWorks", level: 85 },
        { name: "AutoCAD", level: 87 },
        { name: "MATLAB/OCTAVE", level: 99 },
        { name: "SimulIDE", level: 96 },
        { name: "Proteus", level: 88 },
        { name: "Circuit Design", level: 85 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Automobile",
      color: "amber",
      skills: [
        { name: "Vehicle Diagnostics", level: 90 },
        { name: "Engine System", level: 85 },
        { name: "Transmission", level: 87 },
        { name: "Maintenance", level: 99 },
        { name: "Repair", level: 96 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<ColorType, string> = {
      blue: "text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100",
      violet: "text-violet-600 border-violet-200 bg-violet-50 hover:bg-violet-100",
      orange: "text-orange-600 border-orange-200 bg-orange-50 hover:bg-orange-100",
      emerald: "text-emerald-600 border-emerald-200 bg-emerald-50 hover:bg-emerald-100",
      red: "text-red-600 border-red-200 bg-red-50 hover:bg-red-100",
      amber: "text-amber-600 border-amber-200 bg-amber-50 hover:bg-amber-100"
    };
    return colors[color as ColorType] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors: Record<ColorType, string> = {
      blue: "bg-gradient-to-r from-blue-500 to-blue-600",
      violet: "bg-gradient-to-r from-violet-500 to-violet-600",
      orange: "bg-gradient-to-r from-orange-500 to-orange-600",
      emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      red: "bg-gradient-to-r from-red-500 to-red-600",
      amber: "bg-gradient-to-r from-amber-500 to-amber-600"
    };
    return colors[color as ColorType] || colors.blue;
  };

  const getIconBgColor = (color: string) => {
    const colors: Record<ColorType, string> = {
      blue: "bg-blue-500",
      violet: "bg-violet-500",
      orange: "bg-orange-500",
      emerald: "bg-emerald-500",
      red: "bg-red-500",
      amber: "bg-amber-500"
    };
    return colors[color as ColorType] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized proficiency in PLC programming, industrial automation, SCADA/HMI systems, 
            and control logic design for optimized industrial processes
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCards[categoryIndex];
            const displaySkills = isExpanded ? category.skills : category.skills.slice(0, 4);
            const hasMoreSkills = category.skills.length > 4;

            return (
              <div 
                key={categoryIndex}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${getIconBgColor(category.color)} shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-5">
                  {displaySkills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)} transform origin-left group-hover:scale-y-125`}
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expand/Collapse Button */}
                {hasMoreSkills && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => toggleCardExpansion(categoryIndex)}
                      className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${getColorClasses(category.color)} border hover:shadow-md`}
                    >
                      <span>{isExpanded ? 'Show Less' : `Show ${category.skills.length - 4} More`}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Overall Proficiency Indicator */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Overall Technical Proficiency</h3>
            <p className="text-gray-600">Combined expertise across all domains</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-2">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                    <span className={`text-lg font-bold ${getColorClasses(category.color).split(' ')[0]}`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-700 truncate">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;