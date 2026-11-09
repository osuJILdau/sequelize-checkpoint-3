const { Team, Player } = require('./models');

async function runQueries() {
  console.log('1. Все игроки:');
  const players = await Player.findAll();
  players.forEach(player => {
    console.log(player.nickname + ' — ' + player.role);
  });

  console.log('\n2. Команда по ID:');
  const team = await Team.findByPk(1);
  if (team) {
    console.log(team.name + ' (' + team.country + ')');
  }

  console.log('\n3. Команды из России:');
  const russianTeams = await Team.findAll({ where: { country: 'Россия' } });
  russianTeams.forEach(team => console.log(team.name));

  console.log('\n4. Команды и их игроки:');
  const teams = await Team.findAll({
    include: [{ model: Player, as: 'players' }],
    order: [['name', 'ASC']]
  });
  teams.forEach(team => {
    console.log(team.name + ':');
    team.players.forEach(player => console.log('  ' + player.nickname));
  });

  console.log('\n5. Добавление игрока:');
  const newPlayer = await Player.create({
    nickname: 'Blaze',
    role: 'Игрок',
    teamId: 1
  });
  console.log('Добавлен ' + newPlayer.nickname);
}

module.exports = runQueries;
