import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM('regular', 'creator'),
    allowNull: false
  }
});

export default User;