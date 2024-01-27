import express from 'express';
import * as memeController from '../controllers/memeController.js';
import upload from '../middlewares/multer.js'

const router = express.Router();

router.get('/', memeController.getAllMemes);
router.get('/:id', memeController.getMemeById);
router.post('/', upload.single('imageUrl'), memeController.createMeme);
router.put('/:id', memeController.updateMeme);
router.delete('/:id', memeController.deleteMeme);

export default router;