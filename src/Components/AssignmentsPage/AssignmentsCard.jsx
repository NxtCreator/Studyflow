import React from 'react'
import ProgressBar from '../UI/ProgressBar'
import Badge from '../UI/Badge'

function AssignmentsCard({
    course,
    title,
    description,
    type,
    priority,
    status,
    progress,
    dueDate

}){

    const typeVariants = {
        Homework: "info",
        Quiz: "info",
        Exam: "destructive",
    }

    const priorityVariants = {
        High: "destructive",
        Medium: "warning",
        Low: "neutral",
    }

    const statusVariants = {
        Completed: "success",
        "In Progress": "info",
        "Not Started": "neutral",
    }



  return (
    
    <div className='bg-card border border-border rounded-[var(--radius)] p-5 space-y-6 shadow-sm'>
        <div className='text-sm text-muted-foreground'>
            {course}
        </div>

        <div className='space-y-2'>
            <h3 className='font-semibold text-foreground'>
                {title}
            </h3>
            <p className='text-sm text-muted-foreground'>
                {description}
            </p>
        </div>
        <div className="flex gap-2 text-xs">
            <Badge>
                {type}
            </Badge>
            <Badge variant={priorityVariants[priority]}>
                {priority}
            </Badge>
            <Badge variant={statusVariants[status]}>
                {status}
            </Badge>
        </div>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Progress</span>
                <span className='text-foreground'>{progress}%</span>
            </div>

            <div className='w-full h-2 bg-muted rounded-full mt-1'>
                <ProgressBar value={progress} />
            </div>
        </div>
        <div className="text-sm text-muted-foreground">
            Due {dueDate}
        </div>
    </div>
  )
}

export default AssignmentsCard