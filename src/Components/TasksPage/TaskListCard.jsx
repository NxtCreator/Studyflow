import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import TaskItem from "./TaskItem"
import { useDroppable } from "@dnd-kit/core"

function TaskListCard({ title, tasks, groupId, onDeleteTask, onUpdateTask, onEditTask }) {

  const { setNodeRef } = useDroppable({
    id: groupId
  })

  const completed = tasks.filter(t => t.completed).length
  const percentage = tasks.length ? Math.round((completed / tasks.length) * 100) : 0


  return (
    <div
      ref={setNodeRef} 
      className="bg-card rounded-2xl p-5 border border-border">

      <div className="flex justify-between items-center mb-4">

        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <span className="text-xs text-slate-400">
          {percentage}% done
        </span>

      </div>
      <SortableContext
        items={tasks.map(task => task._id)}
        strategy={verticalListSortingStrategy}>

        <div className="space-y-2">

          {tasks.map(task => (
            <TaskItem 
              key={task._id} 
              // groupId={groupId} 
              task={task}
              onDeleteTask={onDeleteTask}
              onUpdateTask={onUpdateTask}
              onEditTask={onEditTask} 
            />
          ))}

        </div>
      </SortableContext>

    </div>
  )
}

export default TaskListCard