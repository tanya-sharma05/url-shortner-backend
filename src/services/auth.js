//////////////////////////////// STATEFUL AUTHENTICATION /////////////////////////////////////
// const sessionIdMap= new Map();

// function setUser(id, user){
//     sessionIdMap.set(id, user);
// }

// function getUser(id){
//     return sessionIdMap.get(id);
// }

// export {
//     setUser,
//     getUser
// }


//////////////////////////////// STATELESS AUTHENTICATION /////////////////////////////////////
import jwt from "jsonwebtoken";

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, process.env.JWT_SECRET_KEY);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

export {
    setUser,
    getUser
}