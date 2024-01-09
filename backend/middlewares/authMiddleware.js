import Jwt from "jsonwebtoken";
import User from '../models/userModel.js';
import Meme from '../models/memeModel.js';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  Jwt.verify(token, 'side project secret key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.id;
    next();
  });
};

export const checkMemeOwnerShip = async (req, res, next) => {
  try {
    const meme = await Meme.findByPk(req.params.id);
    if (!meme) {
      return res.status(404).json({ message: 'Meme not found' });
    }

    if (meme.UserId !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to perform this action' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message})
  }
};
