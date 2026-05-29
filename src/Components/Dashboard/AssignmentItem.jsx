import ProgressBar from "../UI/ProgressBar";

function AssignmentItem({
  title,
  subject,
  progress,
  date,
  status,
  icon: Icon
}) {

  const statusStyles = {
    "due-soon": "bg-orange-100 text-orange-600",
    "in-progress": "bg-slate-200 text-slate-600",
    "nearly-done": "bg-emerald-100 text-emerald-600",
  };

  return (
    <div
      className="
      p-4 bg-card border border-border rounded-2xl

      grid
      grid-cols-1
      md:grid-cols-[1.8fr_1fr_auto]
      gap-4
      items-center
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-2 min-w-0">

        <div className="flex items-center justify-center size-12 rounded-xl bg-white shrink-0">
          <Icon className="size-6 text-orange-700"/>
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold truncate">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground truncate">
            {subject}
          </p>
        </div>

      </div>


      {/* CENTER */}
      <div className="hidden sm:block">

        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">
            Progress
          </span>

          <span className="text-orange-600">
            {progress}%
          </span>
        </div>

        <ProgressBar value={progress}/>
      </div>


      {/* RIGHT */}
      <div className="flex flex-col items-start md:items-end gap-2">

        <p className="font-bold text-sm whitespace-nowrap">
          {date}
        </p>

        <span
          className={`
          text-xs px-4 py-2 rounded-xl
          font-semibold whitespace-nowrap
          ${statusStyles[status]}
          `}
        >
          {status.replace("-", " ").toUpperCase()}
        </span>

      </div>


      {/* Mobile Progress */}
      <div className="sm:hidden text-sm text-slate-500">
        Progress:
        <span className="ml-2 text-orange-600 font-semibold">
          {progress}%
        </span>
      </div>

    </div>
  )
}

export default AssignmentItem;