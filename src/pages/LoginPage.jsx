import { Eye, EyeOff, Zap } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
      
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      setError("")

      // Store token and user info in localStorage
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

        // Redirect to dashboard or home page
        navigate("/")
      
    } catch (error) {
      console.error("Login Failed:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4 '>
      
      {/* Card */}
      <div className='w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg space-y-6'>

        {/* Header */}
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-bold text-foreground'>
            <Zap className='inline-block mr-2 text-primary' size={32} />
            StudyFlow</h1>
          <h2 className='text-2xl font-bold text-foreground'>Welcome Back</h2>
          <p className='text-sm font-medium text-muted-foreground'>
            Log in to continue to your account and manage your tasks and assignments efficiently.
          </p>
        </div>

        {/* Form */}
        <form className='space-y-4' onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className='text-sm font-medium'>Email</label>
            <input
              type='email'
              placeholder='student@university.edu'
              className='mt-1 w-full px-3 py-2 rounded-lg border border-border bg-muted outline-none focus:ring-2 focus:ring-primary pr-10'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")}}
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <label className='text-sm font-medium'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='••••••••'
              className='mt-1 w-full px-3 py-2 rounded-lg border border-border bg-muted outline-none focus:ring-2 focus:ring-primary'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError("")}}
            />

            {/* Show/Hide Password */}
            <button
              type='button'
              onClick={() => setShowPassword(prev => !prev)}
              className='absolute right-3 top-9 text-muted-foreground hover:text-primary transition-colors'
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {/* Footer */}
        <div>
          <p className='text-sm font-bold text-center text-muted-foreground'>
            Don't have an account?{" "}
            <span 
              onClick={() => navigate("/signup")}
              className='text-primary hover:underline cursor-pointer'>Create one</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage