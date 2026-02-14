import express from "express";
import urlRouter from "./routes/url.routes.js";
import {connectDB} from "./db/index.js";
import dotenv from "dotenv";
import { Url } from "./models/url.models.js";

dotenv.config();
const app= express();
const PORT= process.env.PORT || 8000; 

app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.get('/test', async(req,res)=>{
    const allUrls= await Url.find({});
    return res.render('main',{
        urls: allUrls
    });
})

await connectDB();
app.use(express.json());
app.use('/url', urlRouter);

app.listen(PORT, ()=>{console.log(`Server started running at port ${process.env.PORT}`)});