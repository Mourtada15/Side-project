import express from 'express';
import * as memeController from '../controllers/memeController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage });

// router.use(authMiddleware.verifyToken);

router.get('/', memeController.getAllMemes);
router.get('/:id', memeController.getMemeById);
router.post('/', upload.single('imageUrl'), memeController.createMeme);
router.put('/:id', authMiddleware.checkMemeOwnerShip, memeController.updateMeme);
router.delete('/:id', authMiddleware.checkMemeOwnerShip, memeController.deleteMeme);

export default router;