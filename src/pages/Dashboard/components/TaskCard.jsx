import React from 'react';
import { Clock, ChevronRight } from 'lucide-react'; // Import icons
import { Link } from 'react-router-dom';

export default function TaskCard({ title, description,  id }) {
  // Function to get difficulty color
  const getDifficultyColor = (level) => {
    const colors = {
      easy: 'bg-green-500',
      medium: 'bg-yellow-500',
      hard: 'bg-red-500'
    };
    return colors[level] || 'bg-gray-500';
  };

  return (
    <div className="group relative overflow-hidden">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ">
        {/* Difficulty indicator */}
        <div className={`absolute top-0 right-0 w-16 h-16 ${getDifficultyColor('dfd')} transform rotate-45 translate-x-8 -translate-y-8`} />
        
        {/* Content container */}
        <div className="relative">
          {/* Header */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {title || 'Задание 1'}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description || 'Описание задания...'}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Deadline */}
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-2" />
              <span>{'2 дня'}</span>
            </div>

            {/* Action button */}
            <Link 
            to={`details/${id}`}
            
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium 
                             hover:bg-blue-700 transition-colors group-hover:translate-x-1 duration-300 hover:cursor-pointer">
              Посмотреть
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-200 rounded-full opacity-50 
                    group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full opacity-50 
                    group-hover:scale-150 transition-transform duration-500" />
    </div>
  );
}