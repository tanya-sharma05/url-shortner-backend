import express from "express";
import {Router} from "express";
import { userLogin, userSignUp } from "../controllers/user.controllers.js";

const router= Router();

router.post('/', userSignUp);
router.post('/login', userLogin);

export default router;