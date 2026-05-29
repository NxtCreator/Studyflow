import { Plus } from "lucide-react"

function EmptyFocusState({ onNewSession}) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
        <div className="size-20 rounded-full bg-muted flex items-center justify-center">
            <Plus className="h-10 w-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
            <h3 className="font-bold text-xl">No Active Session</h3>
            <p className="text-muted-foreground mt-2 max-w-[240px]">
                Create a focus session to start tracking your work and boost your productivity.
            </p>
        </div>
        <button
            onClick={onNewSession}
            className="px-6 py-3 bg-primary text-primary-foreground flex items-center gap-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
            <Plus size={16} />
            New Session
        </button>
    </div>
  )
}

export default EmptyFocusState