import { getDistrict } from "../controller/districtController.js";
import express from "express";


const router = express.Router()

router.get("/", getDistrict)

export default router;