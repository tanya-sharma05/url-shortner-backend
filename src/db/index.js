import mongoose from "mongoose";
import {DB_NAME} from './constants.js';

const connectDB= async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MONGO DB Connected");
    } 
    catch(error){
        console.log("MONGO DB Connection Failed",error);
    }
};

export {connectDB};
