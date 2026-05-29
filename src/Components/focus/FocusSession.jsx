import { useEffect, useState } from "react"
import FocusTimerCircle from "../Dashboard/FocusTimerCircle";

function FocusSession({ session }) {
  const totalSeconds = session.duration * 60
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const [isRunning, setIsRunning] = useState(false);
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const remainingProgress = secondsLeft / totalSeconds

  const elapsedProgress = 1 - remainingProgress

  let timerState = "safe"

  if(remainingProgress <= 0.5){

    timerState = "warning"
  }

  if(remainingProgress <= 0.2){
    timerState = "danger"
}

  const formattedTime = `${String(minutes).padStart(2,"0")} : 
  ${String(seconds).padStart(2,"0")}`

  useEffect(() => {
    if(!isRunning) {
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="space-y-6">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Current Session</p>
                <h2 className="text-2xl font-bold mt-1">{session.title}</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              {session.duration} mins
            </div>
        </div>
        <FocusTimerCircle
          formattedTime={formattedTime}
          progress={elapsedProgress}
          timerState={timerState}
          isRunning={isRunning}
        />
        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(prev => !prev)} 
            className="flex-1 rounded-full bg-primary text-primary-foreground
          py-3 font-medium">
           {isRunning ? "Pause" : "Resume"}
          </button>
          <button className="rounded-full border px-5">
            End
          </button>
        </div>
    </div>
  )
}

export default FocusSession