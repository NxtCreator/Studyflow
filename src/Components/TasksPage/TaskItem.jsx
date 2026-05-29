import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import TaskMenu from "../UI/TaskMenu"
import { Calendar, Flag, GripVertical } from "lucide-react"


function TaskItem({ task, onDeleteTask, onEditTask, onUpdateTask }) {

  const { attributes, listeners, setNodeRef, transform, transition } = 
  useSortable({ id: task._id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    boxShadow: transform ? "0 10px 25px rgba(0,0,0,0.15)" : undefined
  }


  function handleToggleComplete() {
    onUpdateTask(task._id, {
      completed: !task.completed
    })
  }

  const priorityColors = {
    high: "text-destructive",
    medium: "text-warning",
    low: "text-accent",
}

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group bg-card flex items-start gap-3 p-3 border border-border rounded-lg transition-all
      ${task.completed ? "bg-success/20 opacity-60" : ""}`}>

    <div
      {...attributes}
      {...listeners} 
      className="cursor-grab text-muted-foreground hover:text-slate-600
      opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className={'size-5'} />
    </div>

    <input
      type="checkbox"
      checked={task.completed}
      onChange={handleToggleComplete}
      className="mt-1"
    />

      <div className="flex-1 min-w-0">

        <p className={`text-sm font-medium ${task.completed ? "line-through text-success" : "text-foreground"}`}>
          {task.title}
        </p>

        <div className="text-xs text-muted-foreground flex flex-wrap gap-2">
          {task.subject && (
            <span className="bg-muted px-2 py-1 rounded-md">
              {task.subject}
            </span>
          )}
          {/* <span>•</span> */}
          {task.dueDate && (
            <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
              <Calendar className="size-3" />
              {task.dueDate}
            </span>
          )}
        </div>

      </div>

      <div className="flex items-center justify-center gap-2">
        <Flag className={`size-4 ${priorityColors[task.priority]}`} />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          {/* <TaskMenu onDelete={removeTask} /> */}
          <TaskMenu 
            id={task._id} 
            onDelete={onDeleteTask} 
            onEdit={() => onEditTask(task)} 
          />
        </div>
      </div>

    </div>
  )
}

export default TaskItem