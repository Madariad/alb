import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Lightbulb, Target, Rocket } from 'lucide-react';

const advices = [
  {
    id: 1,
    title: 'Быстрый лайфхак для GeoGebra',
    description: `1. Используйте клавишу Enter для быстрого создания точек
2. Зажмите Ctrl для создания идеальных окружностей
3. Используйте Tab для быстрого переключения между объектами
4. Сохраняйте часто используемые конструкции как инструменты
5. Включите сетку через Ctrl+Shift+D для точного построения`,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
    category: 'lifehacks'
  },
  {
    id: 2,
    title: 'Методика визуализации формул',
    description: `Пошаговый метод объяснения формул:
1. Начните с простейшего примера
2. Визуализируйте каждую часть формулы отдельно
3. Используйте цветовое кодирование для разных элементов
4. Покажите связь между формулой и графиком
5. Завершите практическим применением`,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
    category: 'methods'
  },
  {
    id: 3,
    title: 'Инновационный подход к геометрии',
    description: `Интеграция AR в обучение геометрии:
1. Установите приложение GeoGebra AR
2. Создайте QR-коды для быстрого доступа к моделям
3. Используйте режим дополненной реальности для демонстрации:
   - Сечений многогранников
   - Тел вращения
   - Векторов в пространстве
4. Позвольте ученикам взаимодействовать с 3D моделями
5. Создавайте интерактивные домашние задания`,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop',
    category: 'innovation'
  },
  {
    id: 4,
    title: 'Лайфхак: Быстрые вычисления',
    description: `Приемы быстрого счета:
1. Умножение на 11: запишите число 25
   Сложите 2+5=7 и вставьте между цифрами
   Получится 275
2. Умножение на 5: разделите на 2 и умножьте на 10
3. Возведение в квадрат чисел, близких к 100:
   - 98² = (100-2)² = 10000 - 400 + 4 = 9604
4. Процент от числа:
   8% от 50 = (10% - 2%) = 5 - 1 = 4`,
    image: 'https://images.unsplash.com/photo-1584697964406-cb9e8a5036e5?w=300&h=200&fit=crop',
    category: 'lifehacks'
  },
  {
    id: 5,
    title: 'Методика решения задач',
    description: `Универсальный алгоритм решения задач:
1. Анализ условия:
   - Выпишите данные
   - Определите искомое
   - Сделайте чертеж
2. Поиск решения:
   - Вспомните похожие задачи
   - Разбейте на подзадачи
   - Выберите теоремы/формулы
3. Реализация плана:
   - Запишите решение
   - Проверьте каждый шаг
4. Анализ решения:
   - Оцените результат
   - Найдите другой способ`,
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=300&h=200&fit=crop',
    category: 'methods'
  },
  {
    id: 6,
    title: 'Инновации в алгебре',
    description: `Использование AI для проверки решений:
1. Wolfram Alpha для:
   - Проверки вычислений
   - Построения графиков
   - Решения уравнений
2. PhotoMath для:
   - Сканирования формул
   - Пошагового решения
   - Визуализации графиков
3. Microsoft Math для:
   - Интерактивных упражнений
   - Объяснения концепций
   - Создания тестов`,
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=200&fit=crop',
    category: 'innovation'
  },
  {
    id: 7,
    title: 'Лайфхак: Организация урока',
    description: `Эффективная структура урока математики:
1. Начало (5 мин):
   - Быстрый устный счет
   - Повторение ключевых формул
2. Основная часть (30 мин):
   - Чередуйте теорию и практику
   - Каждые 10 минут меняйте активность
3. Закрепление (10 мин):
   - Работа в парах
   - Взаимопроверка
4. Домашнее задание (5 мин):
   - Объясните каждое задание
   - Укажите сложность`,
    image: 'https://images.unsplash.com/photo-1581091012184-6e6c50ac7e92?w=300&h=200&fit=crop',
    category: 'lifehacks'
  },
  {
    id: 8,
    title: 'Методика объяснения тригонометрии',
    description: `Система запоминания тригонометрического круга:
1. Значения синуса:
   0° → 0
   30° → 1/2
   45° → √2/2
   60° → √3/2
   90° → 1
2. Значения косинуса:
   Те же значения в обратном порядке
3. Мнемоническое правило:
   "Кот Сидит На Дереве"
   Каждая буква = √ значение
   К = корень из 4/4 = 1
   С = корень из 3/2
   Н = корень из 2/2
   Д = корень из 1/2`,
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=300&h=200&fit=crop',
    category: 'methods'
  },
  {
    id: 9,
    title: 'Инновационные тесты',
    description: `Создание адаптивных тестов:
1. Используйте Google Forms:
   - Создайте банк вопросов
   - Настройте ветвление
   - Добавьте автопроверку
2. Plickers для быстрой оценки:
   - Распечатайте QR-коды
   - Сканируйте ответы телефоном
   - Получайте мгновенную статистику
3. Kahoot для геймификации:
   - Создайте викторину
   - Добавьте таймер
   - Включите соревновательный элемент`,
    image: 'https://images.unsplash.com/photo-1573164574392-7972f0b461bf?w=300&h=200&fit=crop',
    category: 'innovation'
  }
];

export default function Advice() {
  const [selectedAdvice, setSelectedAdvice] = useState(null);

  const categories = [
    { id: 'all', name: 'Все советы', icon: BookOpen },
    { id: 'lifehacks', name: 'Лайфхаки', icon: Lightbulb },
    { id: 'methods', name: 'Методики', icon: Target },
    { id: 'innovation', name: 'Инновации', icon: Rocket },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAdvices = activeCategory === 'all' 
  ? advices 
  : advices.filter(advice => advice.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Animated Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Инновационные идеи
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Откройте для себя современные подходы и практические решения для улучшения качества образования
          </p>
        </motion.header>

     {/* Category Tabs */}
  <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-2 md:px-0">
    {categories.map(({ id, name, icon: Icon }) => (
      <motion.button
        key={id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory(id)}
        className={`
          flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full 
          transition-all duration-300 min-w-[120px] md:min-w-[140px]
          text-sm md:text-base whitespace-nowrap
          ${activeCategory === id 
            ? 'bg-white shadow-lg text-indigo-600 scale-105' 
            : 'bg-white/50 hover:bg-white/80 text-gray-600'}
        `}
      >
        <Icon size={18} />
        <span>{name}</span>
      </motion.button>
    ))}
  </div>

        {/* Advice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvices.map((advice) => (
            <motion.div
              key={advice.id}
              layoutId={`advice-${advice.id}`}
              onClick={() => setSelectedAdvice(advice)}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={advice.image}
                    alt={advice.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
                    {advice.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {advice.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedAdvice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAdvice(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`advice-${selectedAdvice.id}`}
                className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedAdvice.image}
                  alt={selectedAdvice.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedAdvice.title}
                  </h2>
                  <p className="text-gray-600">
                    {selectedAdvice.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}