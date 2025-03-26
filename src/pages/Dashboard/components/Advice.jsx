import React from 'react'

const advices = [
  {
    id: 1,
    title: 'Быстрый лайфхак для организации урока',
    description: 'Используйте интерактивные опросы для быстрой обратной связи от учеников.',
    image: 'https://images-cdn.onlinetestpad.net/d3/b7/8d9761ae42ba9600d8027ef66bf3.jpg'
  },
  {
    id: 2,
    title: 'Рекомендация от эксперта',
    description: 'Примените метод активного обучения для повышения вовлеченности.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Практический кейс по планированию',
    description: 'Распределите задания по небольшим группам для более эффективного выполнения.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Современные технологии в классе',
    description: 'Используйте планшеты и интерактивные доски для повышения вовлеченности учеников.',
    image: 'https://images.unsplash.com/photo-1584697964406-cb9e8a5036e5?w=300&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Кейсы успешного проекта',
    description: 'Изучите реальные примеры внедрения инновационных методик в обучении.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=300&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Интерактивные упражнения',
    description: 'Активные методы обучения помогают улучшить взаимодействие в классе.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=200&fit=crop'
  },
  {
    id: 7,
    title: 'Актуальные исследования',
    description: 'Следите за новыми трендами в педагогике с помощью исследовательских обзоров.',
    image: 'https://images.unsplash.com/photo-1581091012184-6e6c50ac7e92?w=300&h=200&fit=crop'
  },
  {
    id: 8,
    title: 'Инновационные методики',
    description: 'Откройте для себя новые способы мотивации и вовлечения учеников через нестандартные подходы.',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=300&h=200&fit=crop'
  },
  {
    id: 9,
    title: 'Эффективное управление временем',
    description: 'Советы по оптимизации учебного процесса и грамотному распределению времени урока.',
    image: 'https://images.unsplash.com/photo-1573164574392-7972f0b461bf?w=300&h=200&fit=crop'
  },
  {
    id: 10,
    title: 'Методики обратной связи',
    description: 'Научитесь строить эффективное взаимодействие через качественную обратную связь с учениками.',
    image: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?w=300&h=200&fit=crop'
  },
  {
    id: 11,
    title: 'Развитие креативности',
    description: 'Уникальные техники для стимулирования творческого мышления и инновационных идей у учеников.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop'
  },
];

export default function Advice() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen">
      {/* Заголовок и вступление */}
      <header className="mb-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Практические советы
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600">
          Здесь собраны быстрые лайфхаки, реальные кейсы и оперативные рекомендации, которые помогут улучшить урок.
        </p>
      </header>

      {/* Вертикальная временная шкала */}
      <div className="relative">
        <div className="border-l-4 border-blue-500 ml-4 md:ml-8">
          {advices.map((advice) => (
            <div key={advice.id} className="mb-12 pl-4 md:pl-6 flex flex-col sm:flex-row items-start">
              <div className="relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full -ml-3"></div>
                <div className="absolute top-3 left-6 w-8 h-px bg-blue-300"></div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
                <div className="flex items-center">
                  <img
                    src={advice.image}
                    alt={advice.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full mr-3 shadow-md"
                  />
                  <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">{advice.title}</h2>
                </div>
                <p className="mt-2 text-xs sm:text-base text-gray-600">{advice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}