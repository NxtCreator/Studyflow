import { ClipboardList, CheckSquare, Clock, BarChart, ClipboardClock } from "lucide-react"

export const statsData = [
  {
    id: "assignments",
    title: "ACTIVE ASSIGNMENTS",
    value: 12,
    trend: "up",
    trendValue: "+2 this week",
    icon: ClipboardClock,
    textColor: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: "tasks",
    title: "TASKS COMPLETED",
    value: 48,
    trend: "up",
    trendValue: "+12%",
    icon: CheckSquare,
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    id: "study-hours",
    title: "STUDY HOURS",
    value: '32.5h',
    trend: "down", // as you requested
    trendValue: "5%", // keeping label but forcing "down"
    icon: Clock,
    textColor: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: "completion-rate",
    title: "COMPLETION RATE",
    value: "94%",
    trend: "up",
    trendValue: "+5%",
    icon: BarChart,
    textColor: "text-purple-600",
    bgColor: "bg-purple-100"
  }
]