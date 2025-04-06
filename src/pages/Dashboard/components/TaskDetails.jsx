import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book, Home, Brain, ProjectorIcon, Workflow } from 'lucide-react';
import data from './task.json';

export default function TaskDetails() {
  const { id } = useParams();
  const [activeLevel, setActiveLevel] = useState('A');
  const [activeType, setActiveType] = useState('in_class');

  const task = data.find(task => task.id === Number(id));
  
  if (!task) {
    return <h1 className="text-center text-2xl mt-10 text-gray-600">Loading...</h1>;
  }

  const activityTypes = {
    in_class: { name: 'Работа в классе', icon: Book },
    homework: { name: 'Домашнее задание', icon: Home },
    independent: { name: 'Самостоятельная работа', icon: Brain },
    project: { name: 'Проектная деятельность', icon: ProjectorIcon },
    optional: { name: 'Факультативный курс', icon: Workflow }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-10">
      {/* Header */}
      <header className="mb-10 pt-8 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          {task.theme}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          {task.description}
        </p>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Level selector */}
        <div className="flex justify-center gap-4 mb-8">
          {['A', 'B', 'C'].map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeLevel === level
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Уровень {level}
            </button>
          ))}
        </div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(activityTypes).map(([type, { name, icon: Icon }]) => (
            <div
              key={type}
              onClick={() => setActiveType(type)}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                activeType === type ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={24} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              </div>
              
              <div className="space-y-4">
                {task.levels[activeLevel][type].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-800">{item.topic}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}