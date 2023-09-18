import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    // if there is not token
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    // if there is token then we should check it
    if (err) {
      console.error("Token verification error:", err);
      // return next(createError(403, "Token is not valid!"));
    }
    req.user = user; // in this info of user id and admin will be there
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    }
    else{
      return next(createError(403,"Your are not authorized"))
    }
  });
};


export const verifyAdmin= (req,res,next)=>{
  verifyToken(req,res,next,()=>{

    if (req.user.isAdmin) {
      next()
    }
    else{
      return next(createError(403,'you are not authorized!'))
    }
  }
    )
}