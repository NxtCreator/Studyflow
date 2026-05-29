import { ChevronLeft, ChevronRight } from "lucide-react"


function CalenderHeader({ currentDate, onNext, onPrev }) {
    const month = currentDate.toLocaleString("default", { month: "long" })
    const year = currentDate.getFullYear()

  return (
    <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
            {month} {year}
        </h2>

        <div className="flex items-center gap-2">
            {/* Prev button */}
            <button 
                onClick={onPrev}
                className="size-9 flex items-center justify-center rounded-md border border-border">
                <ChevronLeft />
            </button>

            {/* Today button */}
            <button className="px-3 h-9 rounded-md border border-border text-md font-semibold">
                Today
            </button>

            {/* Next button */}
            <button
                onClick={onNext}
                className="size-9 flex items-center justify-center rounded-md border border-border">
                <ChevronRight />
            </button>
        </div>
    </div>
  )
}

export default CalenderHeader