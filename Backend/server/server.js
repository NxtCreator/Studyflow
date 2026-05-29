import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB()

const app = express();
app.use(cors())
app.use(express.json());

app.use("/auth", authRoutes)

app.use("/tasks", taskRoutes)


app.get("/", (req, res) => {
    res.send("API is running...")
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})