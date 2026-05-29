import TaskBadge from "../UI/TaskBadge"

function CalendarDay({ day, month, year, selectedDate, setSelectedDate, tasks = [] }) {

  // if (!day) {
  //   return ( <div className="aspect-square" />)
  // }

  const today = new Date()

  const todayDay = today.getDate()
  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()

  const isToday =
    day === todayDay &&
    month === todayMonth &&
    year === todayYear

  const isSelected =
    selectedDate &&
    day === selectedDate.getDate() &&
    month === selectedDate.getMonth() &&
    year === selectedDate.getFullYear()

  function formatLocalDate(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
  }

  const cellDate = new Date(year, month, day)
  const dateString = formatLocalDate(cellDate)

  const tasksForDay = Array.isArray(tasks) ? tasks.filter(t => t.dueDate === dateString) : []

  const taskCount = tasksForDay.length

  let visibleBadges = []
  let remainingCount = 0

  if (taskCount <= 2) {
    visibleBadges = tasksForDay
  } else {
    visibleBadges = tasksForDay.slice(0, 1)
    remainingCount = taskCount - 1
  }

  return (
    
    <div
      onClick={() => {
        if (!day) return
        setSelectedDate(new Date(year, month, day))
    }}
      className={`
        aspect-square
        flex
        flex-col
        rounded-lg md:rounded-xl
        p-1.5 sm:p-2
        transition-colors
        overflow-hidden
        border-2
        border-border
        
        ${isSelected
          ? "bg-primary/5 ring-2 ring-primary" : "hover:border-primary/40 hover:cursor-pointer"
        }
      `}
    >
      <div className="flex items-center justify-between shrink-0">
        {/* Day */}
        {day && (
          <span className="text-md font-semibold text-foreground">
            {day}
          </span>
        )}

        {/* Count */}
        {taskCount > 0 && (
          <span className="text-sm text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
            {taskCount}
          </span>
        )}

      </div>

      <div className=" hidden sm:flex flex-1 flex-col justify-start gap-1 mt-2 overflow-hidden">

        {/* Visible badges */}
        {visibleBadges.map(task => (
          <TaskBadge key={task._id} title={task.title} />
        ))}

        {/* +X more */}
        {remainingCount > 0 && (
          <span className="text-xs text-muted-foreground font-medium">
            +{remainingCount} more
          </span>
        )}

      </div>

    </div>
    
  )
}

export default CalendarDay