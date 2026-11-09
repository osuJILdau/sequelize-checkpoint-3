const sequelize = require('./database');
require('./models');
const seed = require('./seed');
const runQueries = require('./queries');

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    await seed();
    await runQueries();
  } catch (error) {
    console.log('Ошибка: ' + error.message);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

main();
