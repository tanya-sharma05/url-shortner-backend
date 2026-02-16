import express from "express";
import { Router } from "express";
import { Url } from "../models/url.models.js";

const router= Router();

router.get('/', async (req,res)=>{
    if(!req.user) return res.redirect('/login');

    const allUrls= await Url.find({createdBy: req.user._id})
    return res.render('main',{
        urls: allUrls
    })
});

router.get('/signup', (req,res)=>{
    return res.render('signup');
})

router.get('/login', (req,res)=>{
    return res.render('login');
})

export default router;