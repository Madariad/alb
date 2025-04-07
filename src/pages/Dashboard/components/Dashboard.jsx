import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shapes, 
  PenTool, 
 
  Sparkles,
  Target,
  
} from 'lucide-react';
// ...existing imports...

function Dashboard() {
  const [activeTab, setActiveTab] = useState('schedule');

  const stats = [
    { 
      title: 'Материалы GeoGebra', 
      value: '24', 
      change: '+5 за месяц',
      icon: <Shapes className="w-6 h-6 text-emerald-500" />,
      trend: 'up',
      description: 'Интерактивные чертежи'
    },
    { 
      title: 'Методические разработки', 
      value: '18', 
      change: '+3 за месяц',
      icon: <PenTool className="w-6 h-6 text-blue-500" />,
      trend: 'up',
      description: 'Авторские материалы'
    },
    { 
      title: 'Проверено работ', 
      value: '245', 
      change: '+45 за неделю',
      icon: <Target className="w-6 h-6 text-purple-500" />,
      trend: 'up',
      description: 'Контрольные работы'
    }
  ];

  const events = [
    { 
      id: 1, 
      title: 'Мастер-класс: Динамическая геометрия', 
      date: '20 Apr, 2024, 14:00', 
      type: 'workshop',
      color: 'bg-emerald-500',
      category: 'Геометрия',
      duration: '90 минут'
    },
    { 
      id: 2, 
      title: 'Разработка цифровых материалов', 
      date: '25 Apr, 2024, 15:30', 
      type: 'seminar',
      color: 'bg-blue-500',
      category: 'Методика',
      duration: '120 минут'
    },
    { 
      id: 3, 
      title: 'Подготовка к олимпиаде', 
      date: '30 Apr, 2024, 16:00', 
      type: 'planning',
      color: 'bg-purple-500',
      category: 'Олимпиада',
      duration: '60 минут'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8">
        {/* Welcome Section with Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Добро пожаловать!</h1>
              <p className="text-emerald-100">Ваш кабинет математики</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Sparkles className="w-5 h-5" />
              <span>Опытный преподаватель</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid with New Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-gray-50">{stat.icon}</div>
                <span className="text-xs font-medium text-green-500">{stat.change}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{stat.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.description}</span>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default Dashboard;