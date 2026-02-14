import express from "express";
import { Router } from "express";
import { generateShortUrl, getAnalytics, showRedirectUrl } from "../controllers/url.controllers.js";

const router= Router();

router.post('/', generateShortUrl);
router.get('/:shortId', showRedirectUrl);
router.get('/analytics/:shortId', getAnalytics);

export default router;