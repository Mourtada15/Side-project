import Meme from "../models/memeModel.js";
import User from "../models/userModel.js";
import '../models/associations.js';

export const getAllMemes = async (req, res) => {

  try {
    const allMemes = await Meme.findAll();
    if (allMemes) {
      res.status(200).json({ memes: allMemes});
    } 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };

export const getMemeById = async (req, res) => {
  const { id } = req.params;

  try {
    const meme = await Meme.findByPk(id);
    if (meme) {
      res.status(200).json({ meme });
    } else {
      res.status(404).json({ message: 'Meme not found with the given id', id });
    }
} catch (error) {
  res.status(500).json({ error: error.message })
}
}

export const createMeme = async (req, res) => {
  try {
    const { textCaption, userId } = req.body;
    const imageUrl = req.file.path;
    const meme = await Meme.create({ 
      textCaption,
      userId,
      imageUrl,
    });
    res.status(201).json({ message: 'Meme created successfully', meme });
  } catch (error) {
    res.status(500).json({ message: 'Error creating meme', error: error.message });
  }
};

export const updateMeme = async (req, res) => {
  const updated = req.body
  try {
    const meme = await Meme.findByPk(req.params.id)
    await meme.update(updated)
    res.json(meme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export const deleteMeme = async (req, res) => {
  const { id } = req.params;

  try {
    const existingMeme = await Meme.findByPk(id);

    if (!existingMeme) {
      return res.status(404).json({ error: 'No such meme' });
    }

    await Meme.destroy({ where: { id } });

    res.status(200).json(existingMeme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', error: error.message });
  }
};