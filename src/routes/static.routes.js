import express from "express";
import { Router } from "express";
import { Url } from "../models/url.models.js";

const router= Router();

router.get('/', async (req,res)=>{
    const allUrls= await Url.find({})
    return res.render('main',{
        urls: allUrls
    })
})

export default router;