'use client';

import { useState } from 'react';

const technicalSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Java', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Postman', level: 70 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Python', level: 65 },
];

const softSkills = [
  { name: 'Communication', level: 85 },
  { name: 'Problem Solving', level: 90 },
  { name: 'Team Collaboration', level: 88 },
  { name: 'Leadership', level: 80 },
  { name: 'Adaptability', level: 87 },
  { name: 'Critical Thinking', level: 85 },
  { name: 'Time Management', level: 82 },
  { name: 'Creativity', level: 83 },
  { name: 'Attention to Detail', level: 86 },
  { name: 'Work Ethic', level: 90 },
  { name: 'Emotional Intelligence', level: 82 },
  { name: 'Networking', level: 78 },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  const skills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12 animate-fade-in">My Skills</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'technical'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'soft'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Grid with Animation */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ${
          activeTab === 'technical' ? 'animate-slide-in-right' : 'animate-slide-in-left'
        }`}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="space-y-2 animate-fade-in-up transform hover:translate-x-2 transition-transform duration-300"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-1000 ${
                    activeTab === 'technical' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
