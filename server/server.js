import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import districtRoutes from "./routes/districtRoutes.js"

dotenv.config();

await connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/districts", districtRoutes);

app.get("/",(req,res)=>{
    res.send("server is running")
});

const PORT = process.env.PORT || 5000

app.listen(5000,()=>{
    console.log(`Server is running on port${PORT}`)
});