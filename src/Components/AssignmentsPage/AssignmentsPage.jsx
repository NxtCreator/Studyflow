import React, { useState } from 'react'
import AssignmentsGrid from './AssignmentsGrid'
import AssignmentsControls from './AssignmentsControls'
import { assignments } from './assignmentsData'

function Assignments() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [courseFilter, setCourseFilter] = useState("all")

  const filteredAssignments = assignments.filter(a => {
    const matchesSearch = 
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.course.toLowerCase().includes(search.toLowerCase())

    const matchesStatus = 
      statusFilter === "all" || a.status === statusFilter

    const matchesCourse =
      courseFilter === "all" || a.course === courseFilter

      return matchesSearch && matchesStatus && matchesCourse
  })


  return (
    <div className='space-y-6'>
      <AssignmentsControls
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
      />
      <AssignmentsGrid assignments={filteredAssignments}/>
    </div>
  )
}

export default Assignments