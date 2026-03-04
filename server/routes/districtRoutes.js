import { getDistrict,createDistrict,getDistrictById,updateDistrict,deleteDistrict } from "../controller/districtController.js";
import express from "express";
import { protect,adminOnly } from "../middleware/authMiddleware.js";
import { createDistrictReview } from "../controller/districtController.js";
const router = express.Router()

router.get("/", getDistrict);

router.post("/", protect,adminOnly, createDistrict);

router.route("/:id")
.get(getDistrictById)
.put(protect,adminOnly,updateDistrict)
.delete(protect,adminOnly,deleteDistrict)

router.route("/:id/reviews")
.post(protect, createDistrictReview)

export default router;