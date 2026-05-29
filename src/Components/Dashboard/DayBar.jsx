function DayBar({ day, hours, highlight }) {
  const maxHours = 5;
  const height = (hours / maxHours) * 120;

  return (
    <div className="flex flex-col items-center gap-2">
      
      {/* Bar */}
      <div
        className={`w-12 rounded-xl ${
          highlight ? "bg-orange-500" : "bg-orange-100"
        }`}
        style={{ height: `${height}px` }}
      />

      {/* Label */}
      <span className="text-xs text-slate-400 font-medium">
        {day}
      </span>

    </div>
  );
}

export default DayBar;