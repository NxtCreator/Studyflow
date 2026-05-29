import * as Tooltip from "@radix-ui/react-tooltip";

function CustomTooltip({ children, content }) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            sideOffset={8}
            className="
              px-2 py-1 text-xs rounded-md
              bg-card border border-border
              text-foreground shadow-md
            "
          >
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default CustomTooltip;