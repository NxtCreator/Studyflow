import { Plus, X } from 'lucide-react';
import { useState } from 'react'
import { priorityData } from './priorityData';
import PriorityButton from './PriorityButton';
import CustomSelect from '../UI/Select';
import { categoryData } from '../UI/categoryData';


function TaskCreator({ setGroups }) {

    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(null);
    const [category, setCategory] = useState("today")

    const handleAddTask = () => {
        if (!title.trim()) return

        const newTask = {
            id: crypto.randomUUID(),
            title,
            priority,
            completed: false
        }

        setGroups(prev => 
            prev.map(group =>
                group.id === category
                ? {...group, tasks: [...group.tasks, newTask]}
                : group
            )
        )

        setTitle("")
        setPriority(null)
        setExpanded(false)
    }

  return (
    <div className='bg-white border border-slate-200 rounded-xl p-4'>

        {/* Task input */}
        <div className='flex items-center gap-3'>
            {/* <Plus className={`transition-transform ${expanded ? "rotate-45" : ""}`} /> */}

            <input 
                type='text'
                placeholder='Add new task...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onFocus={() => setExpanded(true)}
                className='w-full outline-none text-sm bg-slate-100 p-3 rounded-xl focus:ring-2 focus:ring-blue-400' 
            />
        </div>
        {expanded && (
            <div className={`mt-6 space-y-5`}>
                {/* Priority */}
                <div className='grid grid-cols-3 gap-3'>
                    {priorityData.map((p) => (
                        <PriorityButton
                            key={p.id} 
                            {...p}
                            active={priority === p.id}
                            onClick={() => setPriority(p.id)} 
                        />
                    ))}
                    
                </div>

                {/* Category */}
                    <p className="text-sm text-slate-400 mb-2">Category</p>

                    <CustomSelect 
                        value={category}
                        onValueChange={setCategory}
                        options={categoryData}
                    />

                {/* Buttons */}

                <div className="flex justify-between gap-3">

                    <button
                      onClick={() => setExpanded(false)}
                      className="flex items-center justify-center gap-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex-1"
                    >
                        <X />
                        <span>Cancel</span>
                    </button>

                    <button
                        onClick={handleAddTask} 
                        className="bg-button hover:bg-button/95  px-4 py-2 rounded-xl flex items-center justify-center flex-1 gap-3">
                        <Plus />
                        <span>Add Task</span>
                    </button>
            
                </div>

            </div>
        )}
            
            
    </div>
  )
}

export default TaskCreator