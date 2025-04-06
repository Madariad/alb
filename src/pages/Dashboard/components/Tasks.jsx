import React from 'react'
import TaskCard from './TaskCard'
import task from  './task.json'

export default function Tasks() {
  return (
    <div>

        <div>
           { task.map((task) => (
                <TaskCard 
                    key={task.id}
                    id={task.id}
                    title={task.theme}
                    description={task.description}
                    // deadline={task.deadline}
                    // difficulty={task.difficulty}
                />
            ))}
        </div>
    </div>
  )
}
