import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Home, BookOpen, Calendar, FileText, Settings, HelpCircle, BookMarked } from 'lucide-react';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarContent = (
    <div className="w-64 bg-white shadow-md flex flex-col min-h-screen overflow-y-auto">
      {/* Логотип */}
      <div className="p-4 flex justify-center md:justify-start border-b">
        <NavLink to="/" title="Studdy" onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="hidden md:inline text-xl font-bold text-gray-800">
              Algorithmic Learning Lab
            </span>
          </div>
        </NavLink>
      </div>
  
      {/* Навигация */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-3 px-2">
          <li>
            <NavLink
              to="/materials"
              end
              title="Домой"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-800 hover:bg-blue-50'
                }`
              }
            >
              <Home size={20} />
              <span className="ml-2">Домой</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="metodic"
              title="Методические материалы"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-800 hover:bg-blue-50'
                }`
              }
            >
              <BookOpen size={20} />
              <span className="ml-2">Методические материалы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="advice"
              title="Практические советы"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-800 hover:bg-blue-50'
                }`
              }
            >
              <Calendar size={20} />
              <span className="ml-2">Практические советы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lesson"
              title="Планы уроков"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-800 hover:bg-blue-50'
                }`
              }
            >
              <FileText size={20} />
              <span className="ml-2">Планы уроков</span>
            </NavLink>
          </li>
           <li>
                      <NavLink
                        to="tasks"
                        title="Задания"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center p-3 rounded-lg ${
                            isActive
                              ? 'bg-blue-100 text-blue-500 font-bold'
                              : 'text-gray-700 hover:bg-blue-50'
                          }`
                        }
                      >
                        <FileText size={20} />
                        <span className="ml-2 ">Задания</span>
                      </NavLink>
                    </li>




                    <li>
                      <NavLink
                        to="education"
                        title="Обучения"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center p-3 rounded-lg ${
                            isActive
                              ? 'bg-blue-100 text-blue-500 font-bold'
                              : 'text-gray-700 hover:bg-blue-50'
                          }`
                        }
                      >
                        <BookMarked size={20} />
                        <span className="ml-2 ">Обучения</span>
                      </NavLink>
                    </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <header className="bg-white shadow-sm z-10 py-3 px-4 relative" style={{zIndex: 1000}}>
      <div className="flex items-center justify-between">
        {/* Hamburger для мобильных устройств */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="hover:cursor-pointer bg-[#7a7efc] p-3 rounded-md hidden md:block font-mono text-[#f0f8ff]"
        >
          Назад
        </button>

        <Link 
          to="/"
          className="hover:cursor-pointer bg-[#7a7efc] p-3 rounded-md font-mono text-[#f0f8ff]"
        >
          Главная
        </Link>
      </div>

      {/* Мобильное меню с анимацией */}
      {isMenuOpen && (
        <div
  className={`fixed inset-0 z-50 flex transition-all duration-300 ${
    isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
  }`}
  style={{ opacity: isMenuOpen ? 1 : 0 }}
>
  {/* Sidebar Panel с анимацией сдвига */}
  <div
    className={`relative w-64 bg-white transform transition-transform duration-300 ${
      isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    <div className="p-4 flex justify-end">
      <button onClick={() => setIsMenuOpen(false)}>
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    {sidebarContent}
  </div>
  {/* Overlay shade с анимацией прозрачности */}
  <div
    className="flex-1 bg-black transition-opacity duration-300"
    style={{ opacity: isMenuOpen ? 0.5 : 0 }}
    onClick={() => setIsMenuOpen(false)}
  ></div>
</div>
      )}
    </header>
  );
}

export default Header;