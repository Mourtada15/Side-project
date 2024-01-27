import Jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  const secretKey = process.env.JWT_SECRET

  if (!token) {
    return res.redirect('/login');
  }

  Jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      console.error(err.message);
      return res.redirect('/login')
    }

    console.log(decodedToken);
    next();
  })
};

// export const checkMemeOwnerShip = async (req, res, next) => {
//   try {
//     const meme = await Meme.findByPk(req.params.id);
//     if (!meme) {
//       return res.status(404).json({ message: 'Meme not found' });
//     }

//     if (meme.UserId !== req.userId) {
//       return res.status(403).json({ message: 'Not authorized to perform this action' });
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error', error: error.message})
//   }
// };
