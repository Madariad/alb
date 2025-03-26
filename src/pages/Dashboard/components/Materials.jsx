import React, { useEffect, useState } from 'react';
import Card from './Card';
import matdata from './matData.json';

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setMaterials(matdata);
  }, []);

  const filteredMaterials = materials.filter((material) =>
    material.tags.some((tag) => tag.includes(filter))
  );

  return (
    <div className="p-6">
      {/* Заголовок и описание */}
      <div className="mb-12 text-center px-4">
        <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          Методические материалы
        </h1>
        <p className="mt-4 text-lg lg:text-lg md:text-base sm:text-sm text-gray-500 italic">
          Здесь вы найдете новейшие педагогические методики, рекомендации по организации уроков и примеры практических решений.
        </p>
      </div>

      {/* Фильтры */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-y-3 sm:w-[700px]">
          <button
            onClick={() => setFilter('')}
            className={`flex-shrink-0 w-[150px] text-center px-6 py-2 rounded-full shadow-md hover:cursor-pointer transition-colors duration-200 ${
              filter === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Все
          </button>
          <button
            onClick={() => setFilter('новинка')}
            className={`flex-shrink-0 w-[150px] text-center px-6 py-2 rounded-full shadow-md hover:cursor-pointer transition-colors duration-200 ${
              filter === 'новинка' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Новинки
          </button>
          <button
            onClick={() => setFilter('популярное')}
            className={`flex-shrink-0 w-[150px] text-center px-6 py-2 rounded-full shadow-md hover:cursor-pointer transition-colors duration-200 ${
              filter === 'популярное' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Популярное
          </button>
          <button
            onClick={() => setFilter('рекомендации')}
            className={`flex-shrink-0 w-[150px] h-[40px] text-center px-6 py-2 rounded-full shadow-md hover:cursor-pointer transition-colors duration-200 ${
              filter === 'рекомендации' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Рекомендации
          </button>
        </div>
      </div>

      {/* Карточки материалов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card
            key={material.id}
            title={material.title}
            tags={material.tags}
            description={material.description}
            image={material.image}
            src={`details/${material.id}`}
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Назад
        </button>
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Вперед
        </button>
      </div>
    </div>
  );
}
