import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // we will fill this in step by step
        const authHeader = req.headers.authorization
        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        
        const token = authHeader.split(" ")[1]
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.userId

        next()
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" })
    }
}

export default authMiddleware