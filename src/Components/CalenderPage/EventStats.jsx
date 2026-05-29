import StatCard from "./StatCard"


function EventStats({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-3">
        <StatCard label="TotalEvents" value={8} />
        <StatCard label="Completed" value={1} />
        <StatCard label="Overdue" value={1} />
    </div>
  )
}

export default EventStats