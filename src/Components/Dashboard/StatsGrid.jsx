import StatCard from './StatCard'
import { statsData } from './statsData'

function StatsGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {statsData.map((item) => {
            return (
                <StatCard 
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    trend={item.trend}
                    trendValue={item.trendValue}
                    icon={item.icon}
                    textColor={item.textColor} 
                    bgColor={item.bgColor}
                />
            );
        })}
    </div>
  )
}

export default StatsGrid