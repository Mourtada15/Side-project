import { Sequelize } from "sequelize";

const sequelize = new Sequelize('side-project', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

// test database connection and sync models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database!');

    // Sync models with the database
    try {
      await sequelize.sync();
      console.log('Models synchronized with the database!');
    } catch (error) {
      console.error('Unable to synchronize models: ', error);
    }
  } catch (error) {
    console.log('Unable to connect to the database!')
  }
})();

export default sequelize;