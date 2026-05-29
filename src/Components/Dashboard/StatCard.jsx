import { TrendingDown, TrendingUp } from "lucide-react";

function StatCard({ title, value, trend, trendValue, icon: Icon, textColor, bgColor }) {

  return (
    <div className='bg-card group rounded-2xl p-6 border border-border/50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10'>
        {/* Card Top Row */}
        <div className='flex items-center justify-between gap-2'>
            {/* Icon */}
            <div className={`w-10 h-10 aspect-square rounded-xl ${bgColor} flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                <Icon className={`${textColor} size-6 `} />
            </div>

            {/* Card Title */}
            <p className='text-sm font-semibold text-muted-foreground tracking-wide'>
                {title}
            </p>
        </div>
        {/* Card Bottom Row */}
        <div className='flex items-end justify-between mt-6'>
            {/* Number */}
            <h2 className='text-5xl font-bold tracking-tight text-foreground'>
                {value}
            </h2>
            {/* Trend */}
            <div className='flex items-center gap-2 '>
                {trend === "up" ? ( 
                    <TrendingUp className='size-4 text-emerald-700' /> 
                ) : ( 
                    <TrendingDown className="size-4 text-red-700"/> 
                )}
                <span className={`font-semibold ${
                    trend === "up" ? "text-emerald-700" : "text-red-700"
                }`}>{trendValue}</span>
            </div>
        </div>
    </div>
  );
}

export default StatCard