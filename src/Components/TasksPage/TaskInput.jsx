import { Plus } from "lucide-react"

function TaskInput() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center justify-between">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 outline-none text-slate-700 placeholder-slate-400"
      />

      {/* Button */}
      <button
        className="justify-center bg-button hover:bg-button/85 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
      > 
        <Plus />
         <span>Add Task</span>
      </button>

    </div>
  )
}

export default TaskInput