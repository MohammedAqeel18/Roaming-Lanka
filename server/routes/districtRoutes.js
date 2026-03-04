import { getDistrict,createDistrict,getDistrictById,updateDistrict } from "../controller/districtController.js";
import express from "express";
import { protect,adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/", getDistrict);

router.post("/", protect,adminOnly, createDistrict);

router.route("/:id")
.get(getDistrictById)
.put(protect,adminOnly,updateDistrict)

export default router;