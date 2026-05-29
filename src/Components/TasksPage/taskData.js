

export const taskGroups = [
  {
    id: "today",
    title: "Today",
    tasks: [
      {
        id: 1,
        title: "Complete integration exercises",
        subject: "CALCULUS II",
        dueDate: "2026-04-21",
        dueTime: "09:00 AM",
        completed: true,
        priority: "high"
      },
      {
        id: 2,
        title: "Review lecture notes",
        subject: "COMPUTER SCIENCE",
        dueDate: "2026-04-21",
        dueTime: "02:30 PM",
        completed: false,
        priority: "medium"
      }
    ]
  },

  {
    id: "tomorrow",
    title: "Tomorrow",
    tasks: [
      {
        id: 3,
        title: "Read chapter 8",
        subject: "LITERATURE",
        dueDate: "2026-04-22",
        dueTime: null,
        completed: false
      },
      {
        id: 4,
        title: "Prepare presentation",
        subject: "MARKETING 101",
        dueDate: "2026-04-22",
        dueTime: "10:00 AM",
        completed: false
      }
    ]
  },
  {
    id: "upcoming",
    title: "Upcoming",
    tasks: [
        {
            id: 5,
            title: 'Submit project proposal',
            subject: "GENERAL",
            dueDate: "2026-05-28",
            dueTime: null,
            completed: false
        },
        {
            id: 6,
            title: 'Study for midterm',
            subject: "CALCULUS II",
            dueDate: "2026-06-02",
            dueTime: null,
            completed: false
        }
    ]
  },
  {
    id: "someday",
    title: "Someday",
    tasks: [
        {
            id: 7,
            title: 'Research paper brainstorm',
            subject: "Long term objective",
            dueDate: null,
            dueTime: null,
            completed: false
        },
        {
            id: 8,
            title: 'Clean up project repository',
            subject: "Maintenance",
            dueDate: null,
            dueTime: null,
            completed: false
        }
    ]
  },

]