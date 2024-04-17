import express from "express";
import {
  getCourses,
  getStudents,
  getGeography,
} from "../controllers/students.js";

const router = express.Router();

router.get("/courses", getCourses);
router.get("/students", getStudents);
router.get("/geography", getGeography);

export default router;