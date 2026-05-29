

function StatCard({ label, value }) {
  return (
    <div className='bg-card border border-border rounded-xl p-6 text-center'>
      <div className="text-2xl font-semibold text-center">
        {value}
      </div>

      <div className="text-xs text-muted-foreground text-center">
        {label}
      </div>
    </div>
  )
}

export default StatCard