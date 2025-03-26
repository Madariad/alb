import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

export default function LessonPlans() {
  const [filter, setFilter] = useState('')

  
  const subjects = [...new Set(data.lessonPlans.map(plan => plan.subject))];

  const filteredPlans = filter 
    ? data.lessonPlans.filter(plan => plan.subject === filter) 
    : data.lessonPlans

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Заголовок и вступление */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Планы уроков
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          Здесь собраны готовые сценарии занятий, подробные инструкции и рекомендации для различных  возрастных групп. Найдите идеальный план урока для своего класса!
        </p>
      </header>

      {/* Фильтры */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {subjects.map(subject => (
          <button
            key={subject}
            onClick={() => setFilter(subject)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === subject ? 'bg-blue-800 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {subject}
          </button>
        ))}
        <button
          onClick={() => setFilter('')}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            filter === '' ? 'bg-gray-800 text-white' : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Все
        </button>
      </div>

      {/* Карточки с планами уроков */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlans.map(plan => (
          <div key={plan.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-48 object-cover"
              />
              {/* Метка с названием предмета */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                {plan.subject.toUpperCase()}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{plan.title}</h2>
              <p className="mt-3 text-gray-600 text-sm">
                {plan.description}
              </p>
              <p className="mt-2 text-gray-500 text-xs">Для: {plan.audience}</p>
              <div className="mt-4">
                <Link to={`details/${plan.id}`}  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация или Загрузить еще */}
      {/* <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full text-base font-medium hover:bg-green-700 transition-colors">
          Загрузить еще
        </button>
      </div> */}
    </div>
  )
}