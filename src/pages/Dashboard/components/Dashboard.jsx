import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import StatsCard from '../components/StatsCard';
import TimeTable from '../components/TimeTable';
import EventsList from '../components/EventsList';
import TasksList from '../components/TasksList';

function Dashboard() {
  const events = [
    { id: 1, title: 'Вебинар для учителей: Обмен лучшими практиками', date: '18 Apr, 2024, 15:00', image: 'bg-blue-200' },
    { id: 2, title: 'Мастер-класс: Новые методики в обучении', date: '26 May, 2024, 16:00', image: 'bg-gray-200' },
    { id: 3, title: 'Семинар: Инновации в педагогике', date: '05 Jun, 2024, 12:30', image: 'bg-green-200' },
    { id: 4, title: 'Конференция: Будущее образования и роль учителя', date: '20 Dec, 2024, 12:00', image: 'bg-yellow-200' },
  ];

  return (
    <div className="space-y-6 p-4">
      <WelcomeCard name="James" progress={70} />

      {/* Грид для TimeTable и EventsList: 1 колонка на мобильных устройствах, 3 колонки на md и выше */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <TimeTable />
        </div>
        <div>
          <EventsList events={events} />
        </div>
      </div>

      {/* Дополнительный контент можно адаптировать по схожему принципу */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/*
        <StatsCard 
          title="Attendance" 
          value={'df'} 
          description={'sd'}
          icon="clock"
        />
        */}
      </div>

      {/*
      <div>
        <TasksList 
          todoTasks={todoTasks} 
          reviewTasks={reviewTasks} 
          completedTasks={completedTasks} 
        />
      </div>
      */}
    </div>
  );
}

export default Dashboard;