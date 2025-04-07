import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaskCard({ title, description, id, difficulty = 'medium' }) {
  const getDifficultyConfig = (level) => {
    const configs = {
      easy: {
        gradient: 'from-green-400 to-emerald-500',
        badge: 'Простой',
        borderColor: 'border-green-400'
      },
      medium: {
        gradient: 'from-blue-400 to-indigo-500',
        badge: 'Средний',
        borderColor: 'border-blue-400'
      },
      hard: {
        gradient: 'from-rose-400 to-pink-500',
        badge: 'Сложный',
        borderColor: 'border-rose-400'
      }
    };
    return configs[level] || configs.medium;
  };

  const config = getDifficultyConfig(difficulty);

  return (
    <div className={`
      group relative overflow-hidden 
      bg-white rounded-2xl border-2 ${config.borderColor}
      transition-all duration-300 hover:shadow-lg hover:-translate-y-1
    `}>
      {/* Header with Gradient */}
      <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />
      
      {/* Main Content */}
      <div className="p-6">
        {/* Title Section */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`
            w-10 h-10 rounded-lg 
            bg-gradient-to-r ${config.gradient}
            flex items-center justify-center
          `}>
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {title || 'Задание'}
            </h3>
            {/* <span className="text-sm text-gray-500">{config.badge}</span> */}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">
          {description || 'Описание задания...'}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Progress Indicator */}
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>

          {/* Action Button */}
          <Link 
            to={`details/${id}`}
            onChange={() => {
                console.log('Button clicked!');
            }}
            className={`
              inline-flex items-center gap-2 px-4 py-2
              text-sm font-medium text-white rounded-lg
              bg-gradient-to-r ${config.gradient}
              transition-all duration-300
              hover:shadow-md hover:scale-105
            `}
          >
            Открыть
            <ChevronRight size={16} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-black to-transparent transition-opacity" /> */}
    </div>
  );
}