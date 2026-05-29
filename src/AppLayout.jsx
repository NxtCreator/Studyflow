import Sidebar from "./Components/Sidebar"
import Header from "./Components/Header"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Tasks from "./Components/TasksPage/Tasks"
import AssignmentsPage from "./Components/AssignmentsPage/AssignmentsPage"
import CalendarPage from "./Components/CalenderPage/CalendarPage"
import { useState, useEffect } from "react"
import { pageData } from "./Components/pageData"
import { useLocation, useNavigate } from "react-router-dom"
import MobileHeader from "./Components/MobileHeader"

function AppLayout({ theme, toggleTheme }) {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        navigate("/login")
        return
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        // 🔥 Handle invalid token / unauthorized
        if (res.status === 401) {
          localStorage.removeItem("token")
          navigate("/login")
          return
        }

        const data = await res.json()
        setUser(data)

      } catch (err) {
          // Optionally handle fetch errors (e.g., network issues)
          console.log("Failed to fetch user data:", err)
      }
    }

    fetchUser()
  }, [navigate])

  const currentPage = location.pathname.slice(1) || "dashboard"
  const title = pageData[currentPage]?.title || pageData["dashboard"].title

  const desc =
  currentPage === "dashboard"
    ? (user 
      ? `Welcome back, ${user.name || "Student"}`
      : "Welcome back")
    : pageData[currentPage]?.desc || pageData["dashboard"].desc

  return (
    <div className="h-screen overflow-hidden bg-background">
      <div className="flex h-full">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            collapsed={sideBarCollapsed}
            onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
            user={user}
          />
        </div>

        {/* Mobile Sidebar & Overlay */}
        {/* Overlay */}
        {mobileOpen && (
          <div
            className={`
              fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
              ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Drawer */}
        <div
          className={`
            fixed top-0 left-0 h-full w-64 bg-sidebar z-50
            transform transition-transform duration-300 ease-in-out
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar
            collapsed={false}
            onNavigate={() => setMobileOpen(false)}
            user={user}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <MobileHeader
          title={title}
          onMenuClick={() => setMobileOpen(true)}
          />

          <div className="hidden md:block">
            <Header
              title={title}
              desc={desc}
              user={user}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>

          <main className="flex-1 overflow-y-auto min-h-0">
            <div className="p-4 md:p-6 space-y-6">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/assignments" element={<AssignmentsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout