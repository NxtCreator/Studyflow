import CalendarDay from './CalendarDay'

function CalendarGrid({ currentDate, selectedDate, setSelectedDate, tasks }) {
  
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const leadingDays = Array.from({ length: firstDayOfMonth }).fill(null)

    const days = Array.from({length: 42})
    const monthDays = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    )
    const calendarDays = [...leadingDays, ...monthDays]
     const totalCells = 42
     const trailingDays = Array.from({
      length: totalCells - calendarDays.length
     }).fill(null)
    const allDays = [...calendarDays, ...trailingDays]

  return (
    <div className='grid grid-cols-7 gap-2'>
        {allDays.map((day, index) => (
            <CalendarDay 
              key={index}
              day={day} 
              month={month} 
              year={year}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              tasks={tasks} 
            />
        ))}
    </div>
  )
}

export default CalendarGrid