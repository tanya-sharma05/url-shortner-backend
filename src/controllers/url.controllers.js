import { nanoid } from "nanoid";
import { Url } from "../models/url.models.js";

async function generateShortUrl(req, res){
    const body= req.body;
    if(!body.url) return res.status(400).json({error: "Url is required!"});

    const shortID= nanoid(7);

    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [] 
    });

    return res.json({id: shortID});
};

async function showRedirectUrl(req, res){
    const shortId= req.params.shortId;
    const entry= await Url.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {timestamp: Date.now()}
            }
        }
    )
    res.redirect(entry.redirectUrl);
};

async function getAnalytics(req, res){
    const shortId= req.params.shortId;
    const result= await Url.findOne({shortId});

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
};

export {
    generateShortUrl,
    getAnalytics,
    showRedirectUrl
}