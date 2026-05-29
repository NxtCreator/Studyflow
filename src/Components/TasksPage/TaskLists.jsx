import TaskListCard from "./TaskListCard"
import TaskSection from "./TaskSection"

function TaskLists({ groups, onDeleteTask, activeTab, onUpdateTask, onEditTask }) {
  return (
/*  Task sections now stack vertically.

    Todo-style layouts rely on reading flow rather than
    dashboard card grids.

    Sections own grouping.
    Rows own task rendering. 
*/

    <div className="space-y-8">
        {groups.map(group => (
            <TaskSection
                key={group.id}
                title={group.title}
                tasks={group.tasks}
                groupId={group.id}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
                onEditTask={onEditTask}
                activeTab={activeTab}
            />
        ))}
    </div>
  )
}

export default TaskLists