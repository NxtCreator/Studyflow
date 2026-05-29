import AssignmentsCard from "./AssignmentsCard"
import { assignments } from "./assignmentsData"


function AssignmentsGrid({assignments}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {assignments.map(assignment => (
        <AssignmentsCard key={assignment.id} {...assignment} />
      ))}

    </div>
  )
}

export default AssignmentsGrid