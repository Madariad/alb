import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book, Home, Brain, ProjectorIcon, Workflow, ChevronRight } from 'lucide-react';
import data from './task.json';

export default function TaskDetails() {
  const { id } = useParams();
  const [activeLevel, setActiveLevel] = useState('A');
  const [activeType, setActiveType] = useState('in_class');

  const task = data.find(task => task.id === Number(id));
  
  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="text-gray-400">Загрузка данных...</div>
        </div>
      </div>
    );
  }

  const activityTypes = {
    in_class: { name: 'Работа в классе', icon: Book, color: 'bg-blue-500' },
    homework: { name: 'Домашнее задание', icon: Home, color: 'bg-green-500' },
    independent: { name: 'Самостоятельная работа', icon: Brain, color: 'bg-purple-500' },
    project: { name: 'Проектная деятельность', icon: ProjectorIcon, color: 'bg-orange-500' },
    optional: { name: 'Факультативный курс', icon: Workflow, color: 'bg-pink-500' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Glassmorphism */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {task.theme}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            {task.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Level Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl shadow-lg p-2">
            {['A', 'B', 'C'].map(level => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`
                  px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeLevel === level 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                Уровень {level}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(activityTypes).map(([type, { name, icon: Icon, color }]) => (
            <div
              key={type}
              onClick={() => setActiveType(type)}
              className={`
                group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300
                hover:shadow-xl hover:transform hover:-translate-y-1
                ${activeType === type ? 'ring-2 ring-blue-500' : ''}
              `}
            >
              {/* Card Header */}
              <div className={`${color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <Icon size={24} />
                  <h3 className="text-lg font-semibold">{name}</h3>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                {task.levels[activeLevel][type].map((item, index) => (
                  <div 
                    key={index} 
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500 before:rounded-full"
                  >
                    <h4 className="font-medium text-gray-800 mb-1">{item.topic}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}