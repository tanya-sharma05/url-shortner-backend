import express from "express";
import {connectDB} from "./db/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import urlRouter from "./routes/url.routes.js";
import staticRouter from "./routes/static.routes.js";
import userRouter from "./routes/user.routes.js";
import { checkVerify, verifyUser } from "./middlewares/auth.middlewares.js";

dotenv.config();
const app= express();
const PORT= process.env.PORT || 8000; 

app.set('view engine', 'ejs');
app.set("views", "./src/views");

await connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/url', verifyUser, urlRouter);
app.use('/user', userRouter);
app.use('/', checkVerify, staticRouter);

app.listen(PORT, ()=>{console.log(`Server started running at port ${process.env.PORT}`)});