import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../UI/Dialog"
import DurationPicker from "./DurationPicker"

function FocusSessionModal({ open, onOpenChange, onCreateSession }) {
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState(25)

    return(

        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className="sm:max-w-md">

                <DialogHeader>

                    <DialogTitle>
                        New Focus Session
                    </DialogTitle>

                </DialogHeader>

                <div className="space-y-6 pt-2 pb-2 ">
                    
                    <label className="text-lg font-medium">
                        Session Goal
                    </label>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Study Session" className="
                        w-full
                        mt-2
                        rounded-2xl
                        bg-input
                        border-0
                        outline-none
                        focus:ring-2 focus:ring-primary focus:ring-offset-2
                        px-5
                        py-3
                        "
                    />

                    <DurationPicker 
                        duration={duration}
                        setDuration={setDuration}
                    />
                    
                    <button
                        onClick={() => onCreateSession({
                            title: title ||  "Focus Session",
                            duration
                        })} 
                        className="w-full rounded-full bg-primary 
                                        text-primary-foreground
                                        py-3 font-bold uppercase tracking-wide
                                        hover:bg-primary/90
                                        transition-colors duration-200
                                        "
                    >
                        Create Session
                    </button>

                </div>

            </DialogContent>

        </Dialog>

    )

}

export default FocusSessionModal