import React from 'react';

function WelcomeCard() {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 relative z-[1] overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">
          Привет 👋
        </h1>
        <p className="mb-1">
          Добро пожаловать на нашу образовательную платформу! Здесь вы найдете свежие методические материалы, практические советы и вдохновение для создания ярких и запоминающихся уроков.
        </p>
        <p>
          Наслаждайтесь новым опытом и откройте для себя инновационные подходы в образовании.
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 h-32 w-32 bg-blue-400 rounded-full -mr-10 -mb-10 opacity-50"></div>
      <div className="absolute right-12 bottom-12 h-16 w-16 bg-blue-300 rounded-full opacity-30"></div>
    </div>
  );
}

export default WelcomeCard;