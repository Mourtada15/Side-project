import User from "./userModel.js";
import Meme from "./memeModel.js";

User.hasMany(Meme, { 
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Meme.belongsTo(User, { foreignKey: 'userId' });

export default { User, Meme };