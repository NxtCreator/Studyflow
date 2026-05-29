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
      className={`group bg-card flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted/50 transition-all
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

   <p
   className={`
   truncate
   font-medium

   ${
   task.completed

   ? "line-through opacity-50"

   : ""
   }
   `}
   >

      {task.title}

   </p>

   <div
   className="
   flex
   items-center
   gap-2
   mt-1
   text-xs
   text-muted-foreground
   flex-wrap
   "
   >

      {task.priority && (

      <span>

         {task.priority}

      </span>

      )}

      {task.dueDate && (

      <>

      <span>•</span>

      <span>

      {task.dueDate}

      </span>

      </>

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