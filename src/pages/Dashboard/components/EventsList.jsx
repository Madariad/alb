import React from 'react';

function EventsList({ events }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800 border-b pb-2">
        Последний новости
      </h2>
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <div className={`h-32 w-full ${event.image} bg-cover bg-center`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  {event.title}
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <span className="text-sm text-gray-600">
                {event.date}
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded-full transition-colors">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;