// import { assignments } from "./assignments";
import { BookOpen, Microscope, Sigma } from "lucide-react";
import AssignmentItem from "./AssignmentItem";
import { useState, useEffect } from "react";

function UpcomingAssignmentsCard() {

const assignments = [
    {
        id: 1,
        title: "Macroeconomics Research Paper",
        subject: "Economics 101",
        progress: 65,
        date: "Oct 24, 2023",
        status: "due-soon",
        icon: BookOpen,
    },
    {
        id: 2,
        title: "Calculus III Problem Set",
        subject: "Mathematics",
        progress: 20,
        date: "Oct 28, 2023",
        status: "in-progress",
        icon: Sigma,
    },
    {
        id: 3,
        title: "Cell Biology Lab Report",
        subject: "Natural Sciences",
        progress: 90,
        date: "Oct 22, 2023",
        status: "nearly-done",
        icon: Microscope,
    },
];

  return (
    <div className="bg-card p-6 rounded-3xl border border-border">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Upcoming Assignments
        </h2>

        <button className="text-orange-600 text-sm font-medium">
          View All
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {assignments.map((item) => (
          <AssignmentItem key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
}

export default UpcomingAssignmentsCard;