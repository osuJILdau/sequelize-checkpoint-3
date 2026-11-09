const Team = require('./Team');
const Player = require('./Player');

Team.hasMany(Player, { foreignKey: 'teamId', as: 'players' });
Player.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });

module.exports = { Team, Player };
