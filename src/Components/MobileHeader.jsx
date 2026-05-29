import { Menu } from "lucide-react"

function MobileHeader({ onMenuClick, title }) {
  return (
    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-background">
      <button onClick={onMenuClick}>
        <Menu className="size-6" />
      </button>

      <h1 className="font-semibold text-lg">{title}</h1>

      <div className="w-6" /> {/* Spacer */}
    </div>
  )
}

export default MobileHeader