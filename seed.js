const { Team, Player } = require('./models');

async function seed() {
  const team1 = await Team.create({ name: 'Storm Five', country: 'Россия' });
  const team2 = await Team.create({ name: 'Pixel Squad', country: 'Казахстан' });
  const team3 = await Team.create({ name: 'Night Wolves', country: 'Беларусь' });

  await Player.bulkCreate([
    { nickname: 'Frost', role: 'Капитан', teamId: team1.id },
    { nickname: 'Zero', role: 'Снайпер', teamId: team2.id },
    { nickname: 'Shadow', role: 'Игрок', teamId: team3.id }
  ]);
}

module.exports = seed;
