import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-[#f3f5f8] comfortaa-regular">
      <div className="container mx-auto px-4 py-16 sm:py-20 flex flex-col items-center text-center">
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 tracking-wide mb-2">
          Получите вдохновения
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Вдохновляй. <span className="text-white bg-[#ff8c00] px-2 rounded-md shadow-md">Обучай.</span> Меняй мир.
        </h1>
        <p className="text-gray-600 mt-5 max-w-xl text-sm sm:text-base">
          Открой для себя новые методики, практические советы и планы уроков – всё для современных учителей матиматики.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#work"
            className="bg-[#009eff] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#007acc] transition-transform transform hover:scale-105"
          >
            Как это работает?
          </a>
          <Link
            to="materials/metodic"
            className="flex items-center gap-2 text-[#009eff] px-6 py-3 border border-[#009eff] rounded-md hover:bg-[#f0f8ff] transition-transform transform hover:scale-105"
          >
            Посмотрите материалы
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 4.75L19.25 9.75M19.25 9.75L14.25 14.75M19.25 9.75H4.75" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}