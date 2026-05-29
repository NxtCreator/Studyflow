
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

function CalendarWeekdays() {
  return (
    <div className="grid grid-cols-7 text-sm uppercase text-muted-foreground">
        {days.map((day) => (
            <div key={day} className="text-center py-2">
                {day}
            </div>
        ))}
    </div>
  )
}

export default CalendarWeekdays