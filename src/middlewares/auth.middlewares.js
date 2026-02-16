import { getUser } from "../services/auth.js";

async function verifyUser(req,res,next){
    const userUId= req.cookies.uid;

    if(!userUId) return res.redirect('/login');
    const user= getUser(userUId);

    if(!user) return res.redirect('/login');

    req.user= user;
    next();
}

async function checkVerify(req,res,next){
    const userUId= req.cookies.uid;
    const user= getUser(userUId);

    req.user= user;
    next();
}

export {
    verifyUser,
    checkVerify
}