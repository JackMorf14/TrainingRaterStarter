'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fName: { type: DataTypes.STRING, allowNull: false },
    lName: { type: DataTypes.STRING, allowNull: false },
    DOB: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};