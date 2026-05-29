function ProgressBar({
  value = 0,
  max = 100,
  color = "bg-orange-500",
  height = "h-2",
  showLabel = false
}) {

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">

      {showLabel && (
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}

      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${height}`}>
        
        <div
          className={`${color} ${height} rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;