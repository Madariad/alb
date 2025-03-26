import React from 'react';
import { Calendar } from 'lucide-react';

function TimeTable() {
  // Текущая дата
  const current = new Date();
  const currentDate = current.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Определяем дни недели, начиная с понедельника
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Вычисляем дату понедельника текущей недели
  let currentDay = current.getDay();
  currentDay = currentDay === 0 ? 7 : currentDay;
  const monday = new Date(current);
  monday.setDate(current.getDate() - (currentDay - 1));

  // Генерируем массив дат на всю неделю
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    dates.push(date.getDate());
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-xl font-semibold text-gray-800">Дата</h2>
        <div className="flex items-center text-blue-600">
          <Calendar size={20} className="mr-2" />
          <span className="text-sm font-medium">{currentDate}</span>
        </div>
      </div>
      {/* Для адаптивности оборачиваем календарь в контейнер с overflow-x-auto */}
      <div className="overflow-x-auto">
        <div className="min-w-[350px] grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <div 
              key={day} 
              className={`flex flex-col items-center py-3 rounded-lg ${
                current.getDate() === dates[index] ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <span className="text-sm font-medium">{day}</span>
              <span className="text-lg font-bold mt-1">{dates[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimeTable;