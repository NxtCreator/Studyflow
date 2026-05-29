import { Plus } from 'lucide-react'
import CustomSelect from '../UI/Select'

function TaskControls({
    searchQuery,
    setSearchQuery,
    priorityFilter,
    setPriorityFilter,
    onAddTask,
}) {

    const priorityOptions = [
        { label: "All Priorities", value: "all" },
        { label: "High", value: "high" },
        { label: "Medium", value: "medium" },
        { label: "Low", value: "low" }
    ]

  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6'>
        {/* Left controls */}
        <div className='flex flex-col  gap-3 md:flex-row md:flex-wrap md:items-center'>

            {/* search */}
            <input 
                type="text"
                placeholder='Search Tasks'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full md:w-64 px-4 py-2 border border-border rounded-lg bg-card' 
            />

            {/* Priority Filter */}
            <CustomSelect
                value={priorityFilter}
                onValueChange={setPriorityFilter}
                placeholder="All Status"
                options={priorityOptions}
            />

            {/* Will remove this later */}
            <CustomSelect
                placeholder="All Status"
                options={[
                    { label: "All Status", value: "all" },
                    { label: "Not Started", value: "Not Started" },
                    { label: "In Progress", value: "In Progress" },
                    { label: "Completed", value: "Completed" }
                ]}
            />
        </div>
        
        {/* Add task button */}
        <button
            onClick={onAddTask}
            className='w-full md:w-auto flex items-center justify-center gap-3 bg-primary
                text-primary-foreground px-4 py-2 rounded-[var(--radius)]
                text-sm font-medium hover:opacity-90 transition'>
                <Plus />
                <span>New Task</span>
        </button>
    </div>
  )
}

export default TaskControls