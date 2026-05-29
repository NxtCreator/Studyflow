import { RotateCw } from 'lucide-react'
import { useState, useEffect } from "react";
import FocusTimerCircle from './FocusTimerCircle';
import EmptyFocusState from '../focus/EmptyFocusState';
import FocusSessionModal from '../focus/FocusSessionModal';
import FocusSession from '../focus/FocusSession';

function FocusSessionCard() {
    const [session, setSession] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const POMODORO_TIME = 25 * 60; // 25 minutes in seconds

    const [secondsLeft, setSecondsLeft] = useState(POMODORO_TIME);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = Math.floor(secondsLeft / 60); // Calculate remaining minutes
    const seconds = secondsLeft % 60; // Calculate remaining seconds
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`; // Format time as MM:SS
    const progress = ((POMODORO_TIME - secondsLeft) / POMODORO_TIME) * 100; // Calculate progress percentage

    const handleCreateSession = (sessionData) => {
        setSession(sessionData)
        setShowModal(false)
    }

    let timerState = "safe";

    if (minutes <= 10) {
        timerState = "warning";
    }

    if (minutes <= 5) {
        timerState = "danger";
    }

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
        setSecondsLeft(prev => {
            if (prev <= 1) {
                clearInterval(timer)

                setIsRunning(false)
                return 0
            }

            return prev - 1
        })
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <div className='bg-card text-shadow-card-foreground border border-border rounded-3xl p-8 flex flex-col items-center gap-8 h-full'>
            {!session && (
                <EmptyFocusState onNewSession={() => setShowModal(true)} />
            )}

            <FocusSessionModal
                open={showModal}
                onOpenChange={setShowModal}
                onCreateSession={handleCreateSession}
            />
            {session && (
                <FocusSession session={session} />
            )}

            {/* Title */}
            {/* <p className='text-xl tracking-widest text-card-foreground font-bold'>
                FOCUS SESSION
            </p> */}

            {/* Timer Circle */}
            {/* <div className='flex items-center justify-center my-6'>
                <FocusTimerCircle
                    progress={progress}
                    formattedTime={formattedTime}
                    isRunning={isRunning}
                    timerState={timerState}
                />
            </div> */}

            {/* Buttons */}
            {/* <div className='flex items-center gap-4'>
                <button
                    onClick={() =>
                    setIsRunning(prev => !prev)
                    }
                    className="
                        bg-orange-400
                        text-orange-900
                        px-6 py-2
                        rounded-full
                        font-semibold
                    "
                >
                    {isRunning ? "Pause" : "Start"}
                </button>

                <button
                    onClick={()=>{
                        setIsRunning(false)
                        setSecondsLeft(POMODORO_TIME)
                    }}
                    className="
                    size-10
                    rounded-full
                    bg-white/15
                    flex items-center justify-center"
                >
                <RotateCw/>
                </button>
            </div> */}
        </div>
    )
    }

export default FocusSessionCard