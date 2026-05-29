import React from 'react'

function UpcomingItem({ title, date, time }) {
  return (
    <div className='flex justify-between items-center border border-border rounded-lg p-3'>

        <div className='flex flex-col'>
            <span className='text-sm font-medium'>{title}</span>
            <span className='text-xs text-muted-foreground'>{date}</span>
        </div>

        <span className='text-sm text-muted-foreground'>
            {time}
        </span>
    </div>
  )
}

export default UpcomingItem