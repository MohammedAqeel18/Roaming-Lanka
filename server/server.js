import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import districtRoutes from "./routes/districtRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/districts", districtRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("server is running");
});

const PORT = process.env.PORT || 5000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("MONGO_URI:", process.env.MONGO_URI); // debug line
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err.message);
    process.exit(1);
  });