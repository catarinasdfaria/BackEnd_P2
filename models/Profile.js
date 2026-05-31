const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

module.exports = Profile;
