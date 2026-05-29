import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
  },

  dueDate: {
    type: String,
  },

  dueTime: {
    type: String,
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  order: {
    type: Number,
    required: true,
    default: 0
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema)

export default Task