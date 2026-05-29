import UpcomingAssignmentsCard from './UpcomingAssignmentCard'
import FocusSessionCard from './FocusSessionCard'

function DashboardSection() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        {/* left (takes more space) */}
        <div className='xl:col-span-2'>
            <UpcomingAssignmentsCard />
        </div>

        <FocusSessionCard />
    </div>
  )
}

export default DashboardSection