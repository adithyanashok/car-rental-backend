import jwt from "jsonwebtoken";
import { createError } from "./error.js";
// Check that a user authenticated or not
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return next(createError(403, "Token Not Valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};
// check that there is a admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};
