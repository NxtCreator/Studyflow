import { Zap, LayoutDashboard, CheckSquare, ClipboardList, Calendar, ChartColumn, SidebarIcon} from "lucide-react"
import CustomTooltip from "./UI/Tooltip";
import ProfileMenu from "./UI/ProfileMenu";
import { useNavigate, useLocation } from "react-router-dom";


const menuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard
    },
    {
        id: "assignments",
        label: "Assignments",
        icon: ClipboardList
    },
    {
        id: "tasks",
        label: "Tasks",
        icon: CheckSquare
    },
    {
        id: "calendar",
        label: "Calendar",
        icon:  Calendar
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: ChartColumn
    }
];



function Sidebar({ collapsed, onToggleSidebar, user, onNavigate }) {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPage = location.pathname.slice(1) || "dashboard"

    const handleLogout = () => {
      localStorage.removeItem("token")
      navigate("/login")
    }

  return (
    <div className={`${
        collapsed ? "w-20" : "w-64"
    } h-full shrink-0 flex flex-col bg-sidebar p-4 border-r border-sidebar-border
    transition-[width] duration-300 ease-in-out`}>

        {/* Logo */}
        <div className={`flex items-center justify-between `}>
            <div className={`flex items-center gap-3`}>
                <button 
                    onClick={collapsed ? onToggleSidebar : undefined}
                    className={`
                        w-10 h-10 flex items-center justify-center
                        bg-primary rounded-xl 
                        ${collapsed ? "cursor-pointer hover:scale-105 transition" : ""}`}>

                    <Zap className="size-6 text-primary-foreground"/>
                </button>
                
                {/* If the side bar is collapsed do not display the Logo text */}
                {!collapsed && (
                    <h1 className="font-extrabold text-2xl text-sidebar-foreground">StudyFlow</h1>
                )}

                {/* <div className="bg-chip px-1.5 py-0.5 rounded-sm">
                    <span className="text-primary font-bold">BETA</span>
                </div> */}
            </div>

            {!collapsed && (
                <button 
                    className="p-2 rounded-lg hover:bg-accent dark:hover:bg-accent/50 transition
                    text-foreground"
                    onClick={onToggleSidebar}
                >
                    <SidebarIcon className="size-5" />
                </button>
            )}
        </div>

        {/* Menus */}
        <nav className="flex-1 mt-6 space-y-2">
            {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                    <div key={item.id}>
                        <CustomTooltip content={collapsed ? item.label : ""}>
                            <button 
                                className={`w-full flex items-center justify-between p-3 rounded-xl
                                    transition-all duration-300 
                                    ${currentPage === item.id ? "bg-primary/10 text-primary shadow-lg" : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent" }`}
                                onClick={() => {navigate(`/${item.id}`)
                                                onNavigate?.()}}>
                                <div className={`flex items-center ${collapsed ? "justify-center w-full" : "gap-3" }`}>
                                    <Icon className={`size-5 ${currentPage === item.id ? '' : 'text-muted-foreground'}`}/>
                                    
                                    {!collapsed && (
                                        <span className="truncate text-sm font-medium">
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            </button>
                        </CustomTooltip>
                    </div>
                );
            })}
        </nav>

        <div className="mt-auto p-4 border-t border-border">
            <ProfileMenu 
                user={user} 
                onLogout={handleLogout} 
                collapsed={collapsed}
            />
        </div>
    </div>
  )
}

export default Sidebar

