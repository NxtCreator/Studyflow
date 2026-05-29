
function FocusTimerCircle({
    progress,
    formattedTime,
    isRunning,
    timerState
}) {

    const radius = 85
    const circumference = 2 * Math.PI * radius
    const colorMap = {
        safe: "text-orange-400",
        warning: "text-yellow-400",
        danger: "text-red-700"
    }
    
    const timerColor = colorMap[timerState];

    return (
        <div className="relative size-48">

            <svg
                className={`absolute inset-0 -rotate-90 ${timerColor}`}
                width="192"
                height="192"
            >

                {/* Background ring */}
                <circle
                    cx="96"
                    cy="96"
                    r="85"
                    strokeWidth="10"
                    stroke="rgb(230 230 230)"
                    fill="transparent"
                />

                {/* Progress ring */}
                <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    strokeWidth="10"
                    stroke={"currentColor"}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                        circumference * (1 - progress)
                    }
                    className="
                    transition-all
                    duration-1000
                    "
                />

            </svg>

            <div
            className="
            absolute inset-0
            flex items-center justify-center
            "
            >
                <span className={`text-4xl font-bold transition-transform duration-500
                    ${isRunning 
                        ? `scale-110 ${timerColor}` 
                        : "scale-100 text-muted-foreground"}`}>
                    {formattedTime}
                </span>
            </div>

        </div>
    )
}

export default FocusTimerCircle