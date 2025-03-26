import React from 'react';

export default function Popular() {
  const popularItems = [
    {
        id: 1,
        title: 'Современные методики обучения',
        description: 'Новейшие подходы к обучению, которые помогут вдохновить учеников.',
        src: "materials/metodic/details/1",
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=200&fit=crop',
      },
      {
        id: 2,
        title: 'Методика проектного обучения',
        description: 'Практические проекты для углубленного понимания предмета.',
        src: "materials/metodic/details/5",
        image: 'https://blog.fenix.help/common/upload/ckeditor/2020/07/20/1a0eb8-obuchenie-1595224161.jpg',
      },
      {
        id: 3,
        title: 'Инновационные технологии в обучении',
        description: 'Обзор технологий, которые переворачивают школу.',
        src: "materials/metodic/details/8",
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Популярные материалы</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Ознакомьтесь с самыми востребованными материалами, которые помогут вам в преподавании.
          </p>
        </div>

        {/* Карточки популярных материалов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 ">{item.title}</h3>
              <p className="text-gray-600 mt-4 mb-3">{item.description}</p>
              <a href={item.src} className="mt-[80px] bg-[#009eff] text-white px-4 py-2 rounded-md hover:bg-[#007acc] transition">
                Подробнее
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
