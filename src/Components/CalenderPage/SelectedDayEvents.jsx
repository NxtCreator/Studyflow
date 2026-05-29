import { CalendarDays, Plus } from "lucide-react"
import EventItem from "./EventItem"
import AddTaskModal from "../TasksPage/AddTaskModal"
import { useState } from "react"

function SelectedDayEvents({ selectedDate, tasks, onCreateTask, onUpdateTask, onDeleteTask }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    if (!selectedDate) {
        return (
            <div className="bg-card border-border rounded-xl p-6 text-center">
                <CalendarDays className="mx-auto mb-3 text-muted-foreground" />

                <h3 className="font-medium mb-1">
                    Select a date
                </h3>

                <p className="text-sm text-muted-foreground">
                    Click on a day to view tasks for that day, or create a new task.
                </p>
            </div>
        )
    }

    function formatLocalDate(date) {
        const y = date.getFullYear()
        const m = String(date.getMonth() + 1).padStart(2, "0")
        const d = String(date.getDate()).padStart(2, "0")
        return `${y}-${m}-${d}`
    }

    const dateString = formatLocalDate(selectedDate)

    const tasksForDay = tasks.filter(t => t.dueDate === dateString)

    return (
        <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">
                    {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric"
                    })}
                </h3>
                <button
                    onClick={() => {
                        setEditingTask(null)
                        setModalOpen(true)
                    }}
                    className="text-sm text-primary-foreground bg-primary rounded-[var(--radius)] px-2 py-1.5 flex items-center gap-3">
                    <Plus />
                    <span>Add</span>
                </button>
            </div>

            <div className="flex flex-col gap-3">
                {!tasksForDay.length ? (
                    <div className="border border-dashed border-border rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground">
                            No tasks for this day
                        </p>

                        <button
                            onClick={() => {
                                setEditingTask(null)
                                setModalOpen(true)
                            }}
                            className="text-sm text-primary font-medium hover:underline"
                        >
                            Add your first task
                        </button>
                    </div>
                    
                ) : (
                    tasksForDay.map(task => (
                            <EventItem
                                key={task._id}
                                title={task.title}
                                subject={task.subject}
                                time={task.dueTime}
                                onDelete={() => onDeleteTask(task._id)}
                                onEdit={() => {
                                    setEditingTask(task)
                                    setModalOpen(true)
                                }}
                            />
                    ))
                )}
        </div>

        <AddTaskModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            onCreateTask={(taskData) => {
                onCreateTask({
                ...taskData,
                dueDate: formatLocalDate(selectedDate)
                })
            }}
            onUpdateTask={onUpdateTask}
            editingTask={editingTask}
        />

    </div>
  )
}

export default SelectedDayEvents