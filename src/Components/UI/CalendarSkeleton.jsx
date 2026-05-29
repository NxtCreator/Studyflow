function CalendarSkeleton() {
  return (
    <div className="grid grid-cols-[1fr_320px] gap-6">

      {/* LEFT SIDE */}
      <div className="bg-card border border-border rounded-[var(--radius)] p-6 space-y-6 animate-pulse">

        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-6 w-40 bg-muted rounded-lg" />
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-muted rounded-lg" />
            <div className="h-8 w-8 bg-muted rounded-lg" />
          </div>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-4 bg-muted rounded" />
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-muted rounded-xl"
            />
          ))}
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="bg-card border border-border rounded-[var(--radius)] p-6 space-y-4 animate-pulse">
        <div className="h-6 w-32 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
        <div className="h-4 w-1/2 bg-muted rounded" />
      </div>

    </div>
  )
}

export default CalendarSkeleton