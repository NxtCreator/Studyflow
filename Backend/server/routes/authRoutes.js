import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()



// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body

    // check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      email,
      password: hashedPassword,
      name
    })

    await user.save()

    // 🔥 create token immediately
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.status(201).json({
      message: "User created",
      token
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// LOGIN
router.post("/login", async (req, res) => {
   // console.time("login") // ⬅️ START timer
  
   try {
    const { email, password } = req.body

    // find user by email
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Create JWT token
    const token = jwt.sign(
        { userId: user._id, email: user.email },
         process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )

    // console.timeEnd("login") // ⬅️ END timer

    // Send token
    res.json({ message: "Login successful", 
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password")

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router