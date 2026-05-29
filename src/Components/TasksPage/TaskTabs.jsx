import { Tabs, TabsList, TabsTrigger } from "../UI/Tabs";

function TaskTabs({ activeTab, setActiveTab, groups}) {

  const counts = {

    all:
      groups.reduce(
        (sum,g)=>sum+g.tasks.length,
        0
      ),

    today:
      groups.find(
        g=>g.id==="today"
      )?.tasks.length || 0,

    overdue:
        groups.find(
            g => g.id === "overdue"
        )?.tasks.length || 0,

    upcoming:
      (
        groups.find(
          g=>g.id==="upcoming"
        )?.tasks.length || 0
      ),

    completed:
      groups.find(
        g=>g.id==="completed"
      )?.tasks.length || 0
  }

  const tabs=[
    "all",
    "today",
    "overdue",
    "upcoming",
    "completed"
  ]

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList>
        {
          tabs.map(
            tab=>(
              <TabsTrigger
                key={tab}
                value={tab}
                className="group"
              >
                <div className="flex items-center gap-2">
                  <span className="capitalize">
                    {tab}
                  </span>
                  {" "}
                  <span className="text-xs bg-black/15 group-data-[state=active]:bg-white/20 rounded-full px-2 py-0.5">
                    {counts[tab]}
                  </span>
                </div>
              </TabsTrigger>
            )
          )
        }
      </TabsList>
    </Tabs>
  )
}

export default TaskTabs