import React from 'react'
import TaskMenu from '../UI/TaskMenu'

function EventItem({ title, subject, time, onDelete, onEdit }) {
  return (
        <div
            className="border border-border rounded-lg p-3 bg-background">
        
        {/* Top Row */}
        <div className="flex items-start justify-between gap-3">

            {/* Content */}
            <div className="min-w-0 flex-1">

                <div className="text-sm font-medium truncate">
                    {title}
                </div>

                {subject && (
                    <div className="text-sm text-muted-foreground truncate">
                    {subject}
                    </div>
                )}

                {time && (
                    <div className="text-xs text-muted-foreground mt-1">
                    {time}
                    </div>
                )}

            </div>

            {/* Actions */}
            <TaskMenu
            onEdit={onEdit}
            onDelete={onDelete}
            />
        </div>

    </div>
  )
}

export default EventItem