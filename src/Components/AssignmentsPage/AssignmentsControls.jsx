import React from 'react'
import CustomSelect from '../UI/Select'
import { assignments } from './assignmentsData'
import { Plus } from 'lucide-react'

function AssignmentsControls({
        search,
        setSearch,
        statusFilter,
        setStatusFilter,
        courseFilter,
        setCourseFilter
}) {

    const courses = [...new Set(assignments.map(a => a.course))]

  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-1 gap-3'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search assignments...'
                className='px-4 py-2 border border-input rounded-lg w-64'
            />

            <CustomSelect
                value={statusFilter}
                onValueChange={setStatusFilter}
                placeholder="All Status"
                options={[
                    { label: "All Status", value: "all" },
                    { label: "Not Started", value: "Not Started" },
                    { label: "In Progress", value: "In Progress" },
                    { label: "Completed", value: "Completed" }
                ]}
            />

            {/* Course Filter */}
            <CustomSelect
                value={courseFilter}
                onValueChange={setCourseFilter}
                placeholder="All Courses"
                options={[
                    { label: "All Courses", value: "all" },
                    ...courses.map(c => ({
                    label: c,
                    value: c
                    }))
                ]}
            />
        </div>

        <button className='flex items-center justify-center gap-3 bg-primary
        text-primary-foreground px-4 py-2 rounded-[var(--radius)]
        text-sm font-medium hover:opacity-90 transition'>
            <Plus />
            <span>New Assignment</span>
        </button>
    </div>
  )
}

export default AssignmentsControls