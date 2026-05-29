import * as TabPrimitives from "@radix-ui/react-tabs";

function Tabs({ ...props }) {
    return <TabPrimitives.Root {...props} />;
}

function TabsList({ className="", ...props }) {
    return (
        <TabPrimitives.List
            className={`flex gap-2 overflow-auto ${className}`}
            {...props}
        />
    )
}

function TabsTrigger({ className="", ...props }) {
    return (
        <TabPrimitives.Trigger
            className={`
                px-4 
                py-2 
                rounded-xl
                text-sm
                whitespace-nowrap
                transition-all
                
                data-[state=active]:bg-primary
                data-[state=active]:text-primary-foreground

                bg-muted

                ${className}
            `}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger };