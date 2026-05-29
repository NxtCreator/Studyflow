import express from "express"
import Task from "../models/Task.js"
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(authMiddleware) // Apply auth middleware to all routes in this router

// GET all tasks for the authenticated user, sorted by order
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.userId }).sort({ order: 1 });
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// CREATE a new task
router.post("/", async (req, res) => {
    try {
        const lastTask = await Task.findOne({
            dueDate: req.body.dueDate || null,
            user: req.userId
        }).sort({ order: -1})
        const newOrder = lastTask ? lastTask.order + 1 : 0
        const task = new Task({
            ...req.body,
            order: newOrder,
            user: req.userId,
        })
        await task.save()
        res.status(201).json(task)
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
});

// Reorder tasks
router.put("/reorder", async (req, res) => {
    try {
        const tasks = req.body
        for (let task of tasks) {
            await Task.findByIdAndUpdate( 
                { _id: task._id, user: req.userId },
                { order: task.order}
            )
        }
        res.json({ message: "Order updated successfully" })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
    
})

// DELETE a task by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({
            _id: req.params.id,
            user: req.userId // ownership check
        })

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" })
        }

        res.json({ message: "Task deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

// UPDATE a task by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            { _id: req.params.id, user: req.userId }, // ownership check
            req.body,
            { returnDocument: "after" }
        )

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found"})
        }

        res.json(updatedTask)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router