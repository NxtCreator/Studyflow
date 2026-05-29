import { TrendingUp } from "lucide-react";
import { studyData } from "./studyData";
import DayBar from "./DayBar";

function StudyActivityCard() {
  return (
    <div className="bg-card p-6 rounded-3xl border border-border">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Study Activity
          </h3>

          <p className="text-sm text-muted-foreground">
            Weekly study hour tracking
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-orange-700">
            32.5h
          </p>

          <div className=" flex items-center justify-center gap-2 text-xs text-emerald-600 font-medium">
            <TrendingUp />
            <span>14% vs last week</span>
          </div>
        </div>

      </div>

      {/* Chart */}
      <div className="flex items-end gap-2 h-[140px]">
        {studyData.map((item) => (
          <DayBar key={item.day} {...item} />
        ))}
      </div>

    </div>
  );
}

export default StudyActivityCard;