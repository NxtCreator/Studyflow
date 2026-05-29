import { Slider } from "../UI/Slider"

function DurationPicker({ duration, setDuration }) {

    const presets = [25, 45, 60, 90]

  return (
    <div className="space-y-6">
        <div>
            <label className="text-lg font-medium">
                Duration
            </label>
            <div className="flex justify-between mt-3">
                {presets.map(time => (
                    <button key={time}
                            onClick={() => setDuration(time)}
                            className={`px-4 py-2 rounded-full transition-colors
                                        ${
                                            duration === time ?

                                            `bg-primary text-primary-foreground`

                                            : `bg-muted hover:bg-muted/80`
                                        }
                                    `}>
                                        {time}m
                    </button>
                ))}
            </div>
        </div>
        <div className="space-y-4">
            <Slider 
                value={[duration]}
                onValueChange={(value) => setDuration(value[0])}
                min={5}
                max={120}
                step={5}
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>5m</span>
                <span className="text-primary font-semibold text-base">
                    {duration} minutes
                </span>
                <span>120m</span>
            </div>
        </div>
    </div>
  )
}

export default DurationPicker