import { useEffect, useState } from 'react'
import CalendarGrid from './CalendarGrid'
import CalendarHeader from './CalendarHeader'
import CalendarWeekdays from './CalendarWeekdays'
import CalendarSidebar from './CalendarSidebar';
import CalendarSkeleton from '../UI/CalendarSkeleton';

function CalendarPage() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      setError(null)

      const MIN_LOADING_TIME = 600 // adjust (300–600ms is ideal)

      try {
        const token = localStorage.getItem("token")

        // 🔥 Start BOTH at the same time
        const fetchPromise = fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const timerPromise = new Promise(resolve =>
          setTimeout(resolve, MIN_LOADING_TIME)
        )

        // 🔥 Wait for BOTH to finish
        const [res] = await Promise.all([fetchPromise, timerPromise])

        const data = await res.json()

        if (!res.ok) {
          setError(data.message || "Failed to fetch tasks")
          setTasks([])
          return
        }

        setTasks(data)

      } catch (err) {
        setError("Server unreachable. Check your connection.", err)
        setTasks([])
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const handleNextMonth = () => {
    const nextDate = new Date(currentDate)
    nextDate.setMonth(nextDate.getMonth() + 1)
    setCurrentDate(nextDate)
  }

  const handlePrevMonth = () => {
	  const prevDate = new Date(currentDate)
	  prevDate.setMonth(prevDate.getMonth() - 1)
	  setCurrentDate(prevDate)
  }

    const handleCreateTask = async (taskData) => {
    try {
      const token = localStorage.getItem("token")
  
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(taskData)
      })
      
      const newTask = await res.json()
  
      if (!res.ok) {
        console.error("Failed to create task, ", newTask.message)
        return
      }
  
      setTasks(prev => [...prev, newTask])
  
    } catch (err) {
      console.error("Error creating task: ", err)
    }
  }
  
  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const token = localStorage.getItem("token")
  
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedTask)
      })
  
      const updated = await res.json()
  
      if (!res.ok) {
        console.error(updated.message)
        return
      }
  
      setTasks(prev =>
        prev.map(task =>
          task._id === id ? updated : task
        )
      )
  
    } catch (err) {
      console.error("Failed to update task", err)
    }
  }
  
  const handleDeleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token")
  
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      if (!res.ok) {
        console.error("Failed to delete task")
        return
      }
  
      setTasks(prev =>
        prev.filter(task => task._id !== id)
      )
  
    } catch (err) {
      console.error("Failed to delete task", err)
    }
  }

  if (loading) {
    return (
      <CalendarSkeleton />
    )
  }

  if (error) {
    return (
      <div className='p-6 text-center text-red-500'>{error}</div>
    )
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6'>

      {/* LEFT SIDE */}
      <div className='bg-card border border-border rounded-[var(--radius)] p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6 overflow-hidden'>
          <CalendarHeader
            onNext={handleNextMonth}
            onPrev={handlePrevMonth} 
            currentDate={currentDate} 
          />
          <CalendarWeekdays />
          <CalendarGrid 
            currentDate={currentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate} 
            tasks={tasks}
          />
      </div>

      {/* RIGHT SIDEBAR */}
      <CalendarSidebar 
        selectedDate={selectedDate}
        tasks={tasks} 
        onCreateTask={handleCreateTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default CalendarPage