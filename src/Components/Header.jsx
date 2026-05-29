import { Bell, Moon, Plus, Search, Sun } from "lucide-react"
//import { pageData } from "./pageData"

function Header({ user, title, desc, theme, toggleTheme }) {
    // const title = "Dashboard"

    // const desc = user
    //     ? `Welcome back, ${user.name} Here's your focus for today.`
    //     : "Welcome back"

  return (
    <div className="bg-background/80  border-b border-border px-6 py-4">
        <div className="flex items-center justify-between gap-4">

            {/* Left */}
            <div>
                <h1 className="text-xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>

            {/* Center */}

{/*             <div className="flex-1  max-w-md mx-8">
                <div className="relative">
                    <Search className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2"/>
                    <input 
                        type="text"
                        placeholder="Search tasks..." 
                        className="w-full bg-input rounded-xl pl-10 py-2.5"
                    />
                </div>
            </div> */}

            <div className="flex-1 max-w-md">
                <div className="relative group">
                    <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition"/>

                    <input 
                    type="text"
                    placeholder="Search tasks..." 
                    className="
                        w-full 
                        bg-secondary/50 
                        border border-border
                        rounded-xl 
                        pl-10 pr-4 py-2.5 
                        text-sm
                        outline-none
                        transition
                        focus:bg-white
                        focus:border-primary
                        focus:ring-2 focus:ring-primary/20
                    "
                    />

                </div>
            </div>



            {/* Right */}
{/*             <div className="flex gap-4">
                <button>
                    <Bell />
                </button>

                <button className="bg-button px-6 py-2.5 rounded-lg">
                    <div className="flex items-center gap-2 text-white">
                        <Plus className=""/>
                        Click to Add
                    </div>
                </button>
            </div> */}

            <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg hover:bg-accent hover:text-foreground
                dark:hover:bg-accent/50 transition">
                <Bell className="size-5 text-foreground" />
                </button>

                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-accent dark:hover:bg-accent/50 transition text-foreground">
                    {theme == "dark"
                        ? <Sun className="size-5" />
                        : <Moon className="size-5" />
                    }
                </button>

                <button className="bg-primary px-5 py-2.5 rounded-xl flex items-center gap-2 text-primary-foreground hover:opacity-90 transition">
                    <Plus className="size-4 text-primary-foreground" />
                    <span className="hidden sm:inline">Quick Add</span>
                </button>
            </div>

        </div>
    </div> 
  )
}

export default Header