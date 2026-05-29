import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "../UI/Collapsible";
import {ChevronRight} from "lucide-react";
import { useState } from "react";

function TaskSection({
    title,
    tasks,
    groupId,
    activeTab,
    onDeleteTask,
    onUpdateTask,
    onEditTask
}) {

    // Sections default open.
    //
    // Completed defaults closed because
    // large completed lists become noisy.
    const [open, setOpen] = useState( groupId !== "completed" );

    const showSectionUI = activeTab === "all";

    const { setNodeRef } = useDroppable({ id: groupId, });

    if (!showSectionUI) {
        return (
            <SortableContext
                items={tasks.map(task=>task._id)}
                strategy={verticalListSortingStrategy}
            >

                <div
                    ref={setNodeRef}
                    className="space-y-2"
                >

                    {tasks.map(task=>(

                        <TaskItem
                            key={task._id}
                            task={task}
                            onDeleteTask={onDeleteTask}
                            onUpdateTask={onUpdateTask}
                            onEditTask={onEditTask}
                        />

                    ))}

                </div>

            </SortableContext>
        );
    }

    //const completedCount = tasks.filter(task => task.completed).length;
    
    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
        >
            <div ref={setNodeRef} className="space-y-4">

                <CollapsibleTrigger className="
                    w-full
                    flex
                    items-center
                    justify-between
                    border-b
                    pb-3"
                >
                    <div className="flex items-center gap-3">
                        <ChevronRight
                            className={`
                                h-4
                                w-4
                                transition-transform

                                ${open
                                    ? "rotate-90"
                                    : ""
                                }
                            `}
                        />
                        <h3 className="uppercase text-sm font-bold tracking-wide">{title}</h3>
                        <span className="text-muted-foreground text-sm">
                            {tasks.length}
                        </span>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SortableContext
                        items={tasks.map(task => task._id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-2">
                            {tasks.map(task => (
                                <TaskItem
                                    key={task._id}
                                    task={task}
                                    onDeleteTask={onDeleteTask}
                                    onUpdateTask={onUpdateTask}
                                    onEditTask={onEditTask}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </CollapsibleContent>
            </div>
        </Collapsible>
    )
}

export default TaskSection;