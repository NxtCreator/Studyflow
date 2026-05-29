function TaskBadge({ title }) {
  return (
    <div
      className="text-xs px-2 py-0.5 rounded-lg bg-primary text-white font-medium truncate"
      title={title}
    >
      {title}
    </div>
  )
}

export default TaskBadge