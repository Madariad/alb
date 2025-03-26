import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и описание */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Algorithmic Learning Lab</h2>
            <p className="text-gray-400">
              Платформа для учителей матиматики, которая помогает вдохновлять, обучать и менять мир.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">
                  Главная
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition">
                  Цены
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Algorithmic Learning Lab. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
