import { Eye, EyeOff, Zap } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Signup failed")
      }

      setError("")

      // 🔥 Auto login
      localStorage.setItem("token", data.token)

      // Optional
      // localStorage.setItem("user", JSON.stringify(data.user))

      // Clear inputs
      setName("")
      setEmail("")
      setPassword("")

      navigate("/")

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className='w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg space-y-6'>

        {/* Header */}
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-bold text-foreground'>
            <Zap className='inline-block mr-2 text-primary' size={32} />
            StudyFlow
          </h1>
          <h2 className='text-2xl font-bold'>Create Account</h2>
          <p className='text-sm text-muted-foreground'>
            Start managing your tasks and assignments today.
          </p>
        </div>

        {/* Form */}
        <form className='space-y-4' onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className='text-sm font-medium'>Name</label>
            <input
              type='text'
              placeholder='John Doe'
              className='mt-1 w-full px-3 py-2 rounded-lg border border-border bg-muted outline-none focus:ring-2 focus:ring-primary'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError("")
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label className='text-sm font-medium'>Email</label>
            <input
              type='email'
              placeholder='student@university.edu'
              className='mt-1 w-full px-3 py-2 rounded-lg border border-border bg-muted outline-none focus:ring-2 focus:ring-primary'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
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
                setError("")
              }}
            />

            <button
              type='button'
              onClick={() => setShowPassword(prev => !prev)}
              className='absolute right-3 top-9 text-muted-foreground hover:text-primary'
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>

          {/* Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full py-2 px-4 bg-primary text-white rounded-lg 
            hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {/* Footer */}
        <p className='text-sm text-center text-muted-foreground'>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className='text-primary cursor-pointer hover:underline'
          >
            Log in
          </span>
        </p>

      </div>
    </div>
  )
}

export default SignupPage