import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Calendar, FileText, Settings, HelpCircle } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-0 sm:w-20 md:w-64 bg-white shadow-md flex flex-col h-full overflow-none">
      {/* Логотип */}
      <div className="p-4 flex justify-center md:justify-start">
        <NavLink to="/" title="Studdy">
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
            <span className="hidden md:inline text-xl font-bold text-blue-500">
              Studdy
            </span>
          </div>
        </NavLink>
      </div>

      {/* Элементы навигации */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-3 px-2">
          <li>
            <NavLink
              to="/materials"
              end
              title="Home"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <Home size={20} />
              <span className="ml-2 hidden md:inline">Домой</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="metodic"
              title="Методические материалы"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <BookOpen size={20} />
              <span className="ml-2 hidden md:inline">Методические материалы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="advice"
              title="Практические советы"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <Calendar size={20} />
              <span className="ml-2 hidden md:inline">Практические советы</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lesson"
              title="Планы уроков"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <FileText size={20} />
              <span className="ml-2 hidden md:inline">Планы уроков</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tasks"
              title="Задания"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <FileText size={20} />
              <span className="ml-2 hidden md:inline">Задания</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Дополнительные ссылки */}
      <div className="mb-4">
        {/* <ul className="space-y-3 px-2">
          <li>
            <NavLink
              to="/support"
              title="Support"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <HelpCircle size={20} />
              <span className="ml-2 hidden md:inline">Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              title="Settings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? 'bg-blue-100 text-blue-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50'
                }`
              }
            >
              <Settings size={20} />
              <span className="ml-2 hidden md:inline">Settings</span>
            </NavLink>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Sidebar;