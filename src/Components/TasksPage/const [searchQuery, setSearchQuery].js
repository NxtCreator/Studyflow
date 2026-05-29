  const [searchQuery, setSearchQuery] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredTasks = taskGroups.tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter
    return matchesSearch && matchesPriority
  })