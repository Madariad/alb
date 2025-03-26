import React from 'react';

export default function Advantages() {
  return (
    <section className="bg-[#f9fafb] py-16 font-sans">
      <div className="container mx-auto px-6">
        {/* Блок: Почему выбирают нас */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide animate-fadeIn">
            Почему выбирают нас?
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Быстрый доступ к материалам, актуальные методики, удобный поиск и фильтры. Всё, что нужно для современных учителей матиматики.
          </p>
        </div>

        {/* Обзор функциональности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <img
      src="https://lh5.googleusercontent.com/proxy/adVZ_hDwgXuTSCCpqi7eGrl3qdDEyq0X-Esz5lPJVZJwE0jZ2BVtvU3F2Jt5ehjuo-avP4k-gldcTrpzJhnvfhRjMBlA5g7dfHj6WvgzR-cEUHVrdbgY"
      alt="Библиотека материалов"
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-2xl font-semibold text-gray-800 mt-4">
      Библиотека методических материалов
    </h3>
    <p className="text-gray-600 mt-4">
      Получите доступ к тщательно подобранной библиотеке, которая поможет разнообразить и улучшить ваши уроки.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <img
      src="https://uchitel.club/uploads/2023/08/YOSYaYWeYGJqxUzQS4bIFuKrjMSwaPL5X6LUahPV.svg"
      alt="Методические рекомендации"
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-2xl font-semibold text-gray-800 mt-4">
      Методические рекомендации
    </h3>
    <p className="text-gray-600 mt-4">
      Получите свежие советы и проверенные стратегии для организации уроков, чтобы максимально вовлечь учеников и сделать процесс обучения эффективным.
    </p>
  </div>
<div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
  <img
    src="https://irstar.kz/wp-content/uploads/2024/03/B4456A70-F8D6-49C2-8499-307979920A89.jpg"
    alt="Учительское сообщество"
    className="w-full h-40 object-cover rounded-t-lg"
  />
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    Учительское сообщество
  </h3>
  <p className="text-gray-600 mt-4">
    Присоединяйтесь к нашему динамичному сообществу педагогов: обмен опытом, поддержка коллег и совместное развитие помогут вам найти вдохновение и реализовать новаторские идеи в обучении.
  </p>
</div>
</div>


        {/* Блок: Как это работает */}
        <div className="mt-16" id='work'>
          <h2 className="text-4xl font-extrabold text-gray-800 text-center tracking-wide animate-fadeIn">
            Как это работает?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#009eff] text-white rounded-full text-2xl font-bold animate-bounce">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Выберите категорию</h3>
              <p className="text-gray-600 mt-2">
                Найдите нужную категорию материалов, которая соответствует вашим потребностям.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#009eff] text-white rounded-full text-2xl font-bold animate-bounce delay-200">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Найдите материал</h3>
              <p className="text-gray-600 mt-2">
                Используйте удобный поиск и фильтры, чтобы быстро найти нужный материал.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#009eff] text-white rounded-full text-2xl font-bold animate-bounce delay-400">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">Получите доступ</h3>
              <p className="text-gray-600 mt-2">
                Получите доступ к эксклюзивным методикам и начните использовать их прямо сейчас.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
