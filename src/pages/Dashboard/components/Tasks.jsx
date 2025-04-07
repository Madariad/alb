import React from 'react'
import TaskCard from './TaskCard'
import task from './task.json'

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Учебные материалы
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите интересующий вас материал для изучения математики
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {task.map((task) => (
            <div 
              key={task.id}
              className="transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg"
            >
              <TaskCard
                id={task.id}
                title={task.theme}
                description={task.description}
                difficulty={task.difficulty || 'medium'}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {task.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">
              Материалы в процессе добавления
            </p>
          </div>
        )}
      </div>
    </div>
  )
}