import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { LogOut, User, Settings } from "lucide-react"

function ProfileMenu({ user, onLogout, collapsed }) {
  return (
    <DropdownMenu.Root>
      
      {/* Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className={`w-full flex  items-center p-3 rounded-xl hover:bg-muted transition
                            ${collapsed ? "justify-center w-full" : "gap-3 "}`}>
          
          {/* Avatar */}
          <div className="size-8 rounded-full bg-primary flex shrink-0  items-center justify-center text-white text-sm">
            {user?.name?.[0] || "U"}
          </div>

          {/* Only showName if sidebar is not collapsed */}
          {!collapsed && (
            <div className="text-left">
              <p className="text-sm font-medium">{user?.name || "User"}</p>
              <p className="text-xs text-muted-foreground">View profile</p>
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>

      {/* Menu */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="top"
          align="start"
          className="w-48 bg-card border border-border rounded-xl shadow-lg p-1"
        >

          <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted cursor-pointer">
            <User className="size-4" />
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted cursor-pointer">
            <Settings className="size-4" />
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          <DropdownMenu.Item
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
          >
            <LogOut className="size-4" />
            Logout
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ProfileMenu