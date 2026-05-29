import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { MoreVertical, Trash2, PenSquare, MoreHorizontal} from "lucide-react"

function TaskMenu({ onDelete, onEdit, id }) {
  return (
    <DropdownMenu.Root>

      {/* Trigger (3 dots button) */}
      <DropdownMenu.Trigger asChild>
        <button className=" flex items-center justify-center size-7 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
          <MoreHorizontal className="size-4"/>
        </button>
      </DropdownMenu.Trigger>

      {/* Menu */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={6}
          className="bg-popover border border-border rounded-lg shadow-md p-1 w-32"
        >

          <DropdownMenu.Item
            onClick={() => onEdit(id)}
            className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md focus:bg-accent focus:text-accent-foreground cursor-pointer"
          >
            <PenSquare className='size-4' />
            Edit
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => onDelete(id)}
            className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md focus:bg-destructive focus:text-destructive-foreground cursor-pointer"
          >
            <Trash2 className={'size-4'}/>
            Delete
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  )
}

export default TaskMenu