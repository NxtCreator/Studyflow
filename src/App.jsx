import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import AppLayout from "./AppLayout"
import ProtectedRoute from "./Components/protectedRoute"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected layout */}

      <Route
        path="/*"
        element={
        <ProtectedRoute>
          <AppLayout theme={theme} toggleTheme={toggleTheme} />
        </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App