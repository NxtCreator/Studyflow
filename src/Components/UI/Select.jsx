import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

function CustomSelect({ value, onValueChange, options }) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      
      {/* Trigger (closed select) */}
      <Select.Trigger
        className="flex items-center justify-between gap-3 px-3 py-2 bg-input border 
        border-border rounded-[var(--radius)] p-3 text-sm text-foreground"
      >
        <Select.Value placeholder="Select category" />
        <Select.Icon>
          <ChevronDown className={'size-4 text-muted-foreground'} />
        </Select.Icon>
      </Select.Trigger>

      {/* Dropdown */}
      <Select.Portal>
        <Select.Content
          className="p-4 bg-popover border border-border rounded-[var(--radius)] shadow-lg overflow-hidden"
        >
          <Select.Viewport>

            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="flex items-center justify-between gap-3 px-3 py-2 text-sm cursor-pointer focus:bg-accent rounded-[var(--radius)]"
              >
                <Select.ItemText>{option.label}</Select.ItemText>

                <Select.ItemIndicator>
                  <Check className={'size-4 text-primary'} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}

          </Select.Viewport>
        </Select.Content>
      </Select.Portal>

    </Select.Root>
  );
}

export default CustomSelect;