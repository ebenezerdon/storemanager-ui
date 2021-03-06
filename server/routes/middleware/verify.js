import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
  const token = req.headers.accesstoken;
  if (!token) {
    return res.status(401).json({
      message: 'Hi! You\'re not authorized to use this resource.',
    });
  }
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: 'Invalid authencation! Can you check and try again?',
        error: true,
      });
    }
    req.decoded = decoded;
    return next();
  });
};

const verifyAdmin = (req, res, next) => {
  const { decoded } = req;
  if (decoded.role !== 'admin') {
    return res.status(401).json({
      message: 'Hi! This resource can only be accessed by an admin',
      error: true,
    });
  }
  return next();
};

const verifyAttendant = (req, res, next) => {
  const { decoded } = req;
  if (decoded.role !== 'attendant') {
    return res.status(401).json({
      message: 'Hi! This resource can only be accessed by an attendant',
      error: true,
    });
  }
  return next();
};


export {
  authenticate,
  verifyAdmin,
  verifyAttendant,
};
