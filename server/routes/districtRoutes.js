import { getDistrict,createDistrict } from "../controller/districtController.js";
import express from "express";
import { protect,adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/", getDistrict);

router.post("/", protect,adminOnly, createDistrict);

export default router;