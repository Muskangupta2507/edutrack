import express from "express";
import {getUser, getCourses} from '../controllers/general.js'

const router = express.Router();

router.get("user/:id", getUser);
router.get("course/:id", getCourses);

export default router;