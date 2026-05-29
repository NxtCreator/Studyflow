import React from 'react'
import { UpcomingData } from './UpcomingData'
import UpcomingItem from './UpcomingItem'

function UpcomingThisWeek() {
  return (
    <div className='bg-card border border-border rounded-xl p-5'>
        <h3 className='font-semibold mb-4'>
            Upcoming This Week
        </h3>

        <div className='flex flex-col gap-3'>
            {UpcomingData.map((up, index) => (
                <UpcomingItem 
                 key={index}
                 title={up.title}
                 date={up.date}
                 time={up.time}
                /> 
            ))}
        </div>
    </div>
  )
}

export default UpcomingThisWeek