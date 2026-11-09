const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Player = sequelize.define('Player', {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Player;
