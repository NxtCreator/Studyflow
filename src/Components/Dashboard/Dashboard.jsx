import DashboardSection from './DashboardSection'
import StatsGrid from './StatsGrid'
import StudyActivityCard from './StudyActivityCard'
import UpcomingAssignmentCard from './UpcomingAssignmentCard'

function Dashboard() {
  return (
    <div className='space-y-6'>
        {/* Stats Grid */}
        <StatsGrid />
        <DashboardSection />
        <StudyActivityCard />
    </div>
  )
}

export default Dashboard