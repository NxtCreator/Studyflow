import * as Dialog from "@radix-ui/react-dialog"
import { Flag, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import { Calendar } from "lucide-react"
import { DayPicker } from "react-day-picker"


function AddTaskModal({ open, onOpenChange, onCreateTask, onUpdateTask, editingTask }) {

    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("medium")
    const [group, setGroup] = useState("today")
    const [dueDate, setDueDate] = useState(null)
    const [course, setCourse] = useState("")
    const titleInputRef = useRef(null)
    const [calendarOpen, setCalendarOpen] = useState(false)

    const isEditMode = Boolean(editingTask)


    function formatDate(date) {
        if (!date) return "Pick a date"
            return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
        })
    }   

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                titleInputRef.current?.focus()
            }, 0)
        }
    }, [open])

    useEffect(() => {
    if (editingTask) {
        setTitle(editingTask.title || "")
        setPriority(editingTask.priority || "medium")
        setCourse(editingTask.subject || "")

        // Convert string date → JS Date
        if (editingTask.dueDate) {
        setDueDate(new Date(editingTask.dueDate))
        } else {
        setDueDate(null)
        }
    } else {
        // reset when switching back to create mode
        setTitle("")
        setPriority("medium")
        setCourse("")
        setDueDate(null)
    }
    }, [editingTask])

    const priorityOptions = [
        { value: "high", label: "High", color: "text-red-500" },
        { value: "medium", label: "Medium", color: "text-yellow-500" },
        { value: "low", label: "Low", color: "text-gray-500" }
    ]

    function formatLocalDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")

      return `${year}-${month}-${day}`
    }

    function handleSubmit(e) {
        e.preventDefault()

        const taskData = {
            title,
            priority,
            dueDate: dueDate ? formatLocalDate(dueDate) : null,
            subject: course
        }


        if (isEditMode) {
            onUpdateTask(editingTask._id, taskData)
        } else {
            onCreateTask(taskData)
        }

        // reset form
        setTitle("")
        setPriority("medium")
        setGroup("today")
        setDueDate(null)
        setCourse("")

        onOpenChange(false)
    }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>

            {/* Overlay */}
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <Dialog.Content
                className="fixed top-1/2 left-1/2 w-[420px] max-w-[90vw]
                -translate-x-1/2 -translate-y-1/2 bg-card border border-border
                rounded-2xl p-6 shadow-lg">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <Dialog.Title className="text-lg font-semibold">
                           {isEditMode ? "Edit Task" : "Add New task"}
                        </Dialog.Title>

                        <Dialog.Close>
                            <X />
                        </Dialog.Close>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Title */}
                        <div>
                            <label className="text-sm font-medium">Task Title *</label>

                            <input
                                ref={titleInputRef} 
                                type="text"
                                required
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter task title..."
                                className="mt-1 w-full px-3 py-2 rounded-lg border border-border
                                bg-card"
                            />
                        </div>

                        {/* Priority */}
                        <div className="flex justify-between mt-2">
                            {priorityOptions.map((option) => {
                                const active = priority === option.value

                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setPriority(option.value)}
                                        className={`
                                            flex items-center gap-2 px-4 py-2 rounded-lg border text-sm
                                            transition
                                            ${
                                                active ? 'border-primary bg-primary/10'
                                                : "border-border hover:bg-muted"
                                            }`}
                                    >
                                        <Flag className={option.color} />
                                        {option.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Group */}
                        <div>
                            <label className="text-sm font-medium">Category</label>

                            <select
                                value={group}
                                onChange={(e)=>setGroup(e.target.value)}
                                className="mt-1 w-full px-3 py-2 rounded-lg
                                border border-border bg-card"
                            >
                                <option value="today">Today</option>
                                <option value="tomorrow">Tomorrow</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="someday">Someday</option>
                            </select>
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="text-sm font-medium">
                            Due Date (Optional)
                            </label>

                            <Popover.Root open={calendarOpen} onOpenChange={setCalendarOpen} >
                                <Popover.Trigger asChild>
                                    <button
                                    type="button"
                                    className="
                                    mt-2 w-full flex items-center justify-between
                                    px-3 py-2 rounded-lg border border-border
                                    bg-background text-sm
                                    hover:bg-muted
                                    "
                                    >
                                    {formatDate(dueDate)}
                                    <Calendar size={16} />
                                    </button>
                                </Popover.Trigger>

                                <Popover.Portal>
                                    <Popover.Content
                                    sideOffset={8}
                                    className="
                                    bg-card border border-border rounded-xl
                                    p-3 shadow-lg
                                    "
                                    >
                                    <DayPicker
                                        mode="single"
                                        selected={dueDate}
                                        onSelect={(date) => {
                                            setDueDate(date)
                                            setCalendarOpen(false)
                                        }}
                                    />
                                    </Popover.Content>
                                </Popover.Portal>
                            </Popover.Root>
                        </div>

                        {/* Course */}
                        <div>
                            <label className="text-sm font-medium">
                                Course (Optional)
                            </label>

                            <input
                                type="text"
                                value={course}
                                onChange={(e)=>setCourse(e.target.value)}
                                placeholder="Course name"
                                className="mt-1 w-full px-3 py-2 rounded-lg
                                border border-border bg-card"
                            />
                        </div>

                        {/* Footer buttons */}
                        <div className="flex justify-end gap-3 pt-2">

                            <Dialog.Close
                                className="px-4 py-2 rounded-lg border border-border"
                            >
                                Cancel
                            </Dialog.Close>

                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg
                                bg-primary text-primary-foreground"
                            >
                                {isEditMode ? "Save Chanes" : "Add Task"}
                            </button>

                        </div>

                    </form>

            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AddTaskModal