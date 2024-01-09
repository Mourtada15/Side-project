import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const Meme = sequelize.define('Meme', {
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  textCaption: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Meme;