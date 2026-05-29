import { useState, useEffect } from 'react'
import TaskCreator from './TaskCreator'
import TaskInput from './TaskInput'
import TaskLists from './TaskLists'
import { closestCorners, DndContext } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import TaskControls from './TaskControls'
import AddTaskModal from './AddTaskModal'
import TaskTabs from './TaskTabs'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  // Tabs decide WHICH tasks are visible.
  // Groups decide HOW visible tasks are organized.
  //
  // Keep these responsibilities separate.
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const fetchTasks = async () => {

      try {
        const token = localStorage.getItem("token")

        const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await res.json()
        setTasks(data)
      } catch (err) {
        console.log("Failed to fetch tasks:", err)
      }
    }
    fetchTasks()
  }, [])

  // Open the edit modal
  function handleEditClick(task) {
    setEditingTask(task)
    setIsAddModalOpen(true)
  }

  // Update an existing task
  async function handleUpdateTask(taskId, updates) {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
      })

      const updatedTask = await res.json()

      // Update UI state
      setTasks(prev => 
        prev.map(task =>
          task._id === taskId ? updatedTask : task
        )
      )
    } catch (err) {
      console.log("Failed to update task:", err)
    }
  }

  async function handleDeleteTask(taskId) {
    try {
      const token = localStorage.getItem("token")
      // Find the task being deleted
      const taskToDelete = tasks.find(t => t._id === taskId)
      if (!taskToDelete) return

      const group = getTaskGroup(taskToDelete)

      // Remove from UI
      const remainingTasks = tasks.filter(t => t._id !== taskId)

      // Get tasks in same group
      const groupTasks = remainingTasks
        .filter(t => getTaskGroup(t) === group)
        .sort((a, b) => a.order - b.order)

      // Reassign order
      const updatedGroup = groupTasks.map((task, index) => ({
        ...task,
        order: index
      }))

      // Merge back
      const updatedTasks = remainingTasks.map(task => {
        const updated = updatedGroup.find(t => t._id === task._id)
        return updated ? updated : task
      })

      // Update UI
      setTasks(updatedTasks)

      // Delete from backend
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      // Sync new order
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/reorder`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          updatedGroup.map(t => ({
            _id: t._id,
            order: t.order
          }))
        )
      })

    } catch (err) {
      console.log("Failed to delete task:", err)
    }
  }

  function formatLocalDate(date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.subject || "").toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPriority =
      priorityFilter === "all" ||
      task.priority === priorityFilter

    return matchesSearch && matchesPriority
  })


  // Determines which lifecycle bucket a task belongs to based on its due date
  //
  // Group priority matters: completed > today > tomorrow > upcoming > someday
  //
  // Completed tasks always win over date rules and go to completed group
  // Example:
  // A completed overdue task should appear once in
  // completed group, not in both groups
  //
  // This prevents tasks from disappearing when dates pass
  // And gives every task a  visible home regardless of due date or completion status
  function getTaskGroup(task) {
    if (task.completed) return "completed"

    if (!task.dueDate) return "someday"

    const today = formatLocalDate(new Date())

    // Past date = overdue
    if (task.dueDate < today) return "overdue"

    // Due today
    if (task.dueDate === today) return "today"

    // Any future date becomes upcoming
    // Tomorrow no longer needs a separate group/bucket
    if (task.dueDate > today) return "upcoming"

    return "someday"
  }

  // Tasks are filtered first,
  // then grouped dynamically.
  // This keeps tabs, filters and rendering
  // separate from business rules.

  const overdueTasks = filteredTasks
    .filter(task => getTaskGroup(task) === "overdue")
    .sort((a,b)=>a.order-b.order)

  const todayTasks = filteredTasks
    .filter(task => getTaskGroup(task) === "today")
    .sort((a,b)=>a.order-b.order)

  const upcomingTasks = filteredTasks
    .filter(task => getTaskGroup(task) === "upcoming")
    .sort((a,b)=>a.order-b.order)

  const somedayTasks = filteredTasks
    .filter(task => getTaskGroup(task) === "someday")
    .sort((a,b)=>a.order-b.order)

  const completedTasks = filteredTasks
    .filter(task => getTaskGroup(task) === "completed")
    .sort((a,b)=>a.order-b.order)


  // Groups define visual organization.
  // Tabs (coming next) decide visibility.
  // Keep those responsibilities separate.

  const derivedGroups = [
    {
      id:"overdue",
      title:"Overdue",
      tasks: overdueTasks
    },
    {
      id:"today",
      title:"Today",
      tasks: todayTasks
    },
    {
      id:"upcoming",
      title:"Upcoming",
      tasks: upcomingTasks
    },
    {
      id:"someday",
      title:"Someday",
      tasks:somedayTasks
    },
    {
      id:"completed",
      title:"Completed",
      tasks:completedTasks
    }
  ]

  // Tabs control which sections appear.
  //
  // "All" shows the full task lifecycle.
  //
  // Other tabs isolate a single
  // section to reduce noise.
  const visibleGroups =
    activeTab === "all"

      ? derivedGroups

      : derivedGroups.filter(
          group =>
            group.id === activeTab
        )

  // Create a new task
  async function handleCreateTask(taskData) {

    try {
      const token = localStorage.getItem("token")
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskData)
      })

      const newTask = await res.json()
      setTasks(prev => [...prev, newTask])
    } catch (err) {
      console.error("Failed to create task:", err)
    }
  }

  async function handleDragEnd(event) {
    const { active, over } = event

    if (!over) return

    const activeId = active.id
    const overId = over.id

    const activeTask = tasks.find(t => t._id === activeId)
    const overTask = tasks.find(t => t._id === overId)

    if (!activeTask || !overTask) return

    const activeGroup = getTaskGroup(activeTask)
    const overGroup = getTaskGroup(overTask)

    if (activeGroup !== overGroup) return

    const groupTasks = tasks.filter(t =>
      getTaskGroup(t) === activeGroup
    ).sort((a, b) => a.order - b.order)

    const oldIndex = groupTasks.findIndex(t => t._id === activeId)
    const newIndex = groupTasks.findIndex(t => t._id === overId)

    if (oldIndex === -1 || newIndex === -1) return

    const reordered = arrayMove(groupTasks, oldIndex, newIndex)
    const updatedGroup = reordered.map((task, index) => ({
      ...task,
      order: index
    }))

    const updatedTasks = tasks.map(task => {
      const updated = updatedGroup.find(t => t._id === task._id)
      return updated ? updated : task
    })

    setTasks(updatedTasks)

    try {
      const token = localStorage.getItem("token")
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/reorder`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          updatedGroup.map(t => ({
            _id: t._id,
            order: t.order
          }))
        )
      })
    } catch (error) {
      console.log("Failed to update order", error)
    }
  }

  return (
    <DndContext 
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}>
      <div className='space-y-6'>
          <TaskControls 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            onAddTask={() => setIsAddModalOpen(true)}
          />

          <TaskTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            groups={derivedGroups}
          />

          <TaskLists 
            groups={visibleGroups}
            activeTab={activeTab}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
            onEditTask={handleEditClick}
          />
          
          <AddTaskModal
            open={isAddModalOpen}
            onOpenChange={(open) => {
              setIsAddModalOpen(open)
              if (!open) setEditingTask(null)
            }}
            onCreateTask={handleCreateTask}
            onUpdateTask={handleUpdateTask}
            editingTask={editingTask}
          />
      </div>
    </DndContext>
  )
}

export default Tasks