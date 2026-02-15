import express from "express";
import urlRouter from "./routes/url.routes.js";
import {connectDB} from "./db/index.js";
import dotenv from "dotenv";
import staticRouter from "./routes/static.routes.js";

dotenv.config();
const app= express();
const PORT= process.env.PORT || 8000; 

app.set('view engine', 'ejs');
app.set("views", "./src/views");

await connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/url', urlRouter);
app.use('/', staticRouter);

app.listen(PORT, ()=>{console.log(`Server started running at port ${process.env.PORT}`)});