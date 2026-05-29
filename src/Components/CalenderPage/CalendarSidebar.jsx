import React from 'react'
import EventStats from './EventStats'
import SelectedDayEvents from './SelectedDayEvents'
import UpcomingThisWeek from './UpcomingThisWeek'

function CalendarSidebar({ selectedDate, tasks, onCreateTask, onUpdateTask, onDeleteTask }) {
  return (
    <div className='flex flex-col gap-6'>
        <EventStats />

        <SelectedDayEvents 
          selectedDate={selectedDate}
          tasks={tasks} 
          onCreateTask={onCreateTask}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />

        <UpcomingThisWeek />
    </div>
  )
}

export default CalendarSidebar